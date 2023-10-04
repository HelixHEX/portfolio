"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { Button, Center, ChakraProvider, Text, VStack } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
//fonts
import theme from "./theme";
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "@tanstack/react-query";
import { useState } from "react";
import AnimatedCursor from "react-animated-cursor";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            suspense: true,
            gcTime: 0,
          },
        },
      })
  );
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              onReset={reset}
              fallbackRender={({ error, resetErrorBoundary }) => (
                <>
                  <AnimatedCursor
                    innerSize={8}
                    outerSize={35}
                    innerScale={1}
                    outerScale={2}
                    outerAlpha={0}
                    innerStyle={{
                      backgroundColor: "var(--cursor-color)",
                    }}
                    outerStyle={{
                      border: "3px solid var(--cursor-color)",
                    }}
                  />
                  <Center bg='#F15152' w="100%" h="100vh">
                    <VStack>
                      <Text>Something went wrong! {error.message}</Text>
                      <Button onClick={() => resetErrorBoundary()}>
                        Try Again
                      </Button>
                    </VStack>
                  </Center>
                </>
              )}
            >
              <CacheProvider>{children}</CacheProvider>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default Providers;
