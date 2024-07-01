import { MutationOptions, QueryFunction, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";

interface CustomQueryOptions<TQueryFnData, TError, TData = TQueryFnData>
  extends Omit<UseQueryOptions<TQueryFnData, TError, TData>, "queryKey" | "queryFn"> {}

export const useCustomQuery = <TQueryFnData, TError, TData = TQueryFnData>(
  queryKey: readonly string[],
  queryFn: QueryFunction<TQueryFnData>,
  options?: CustomQueryOptions<TQueryFnData, TError, TData>,
) => {
  return useQuery<TQueryFnData, TError, TData>({
    queryKey,
    queryFn,
    ...options,
  });
};

interface CustomMutationOptions<TData, TError, TVariables, TContext = unknown>
  extends Omit<MutationOptions<TData, TError, TVariables, TContext>, "mutationFn"> {}

export const useCustomMutation = <TData, TError, TVariables, TContext = unknown>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: CustomMutationOptions<TData, TError, TVariables, TContext>,
) => {
  return useMutation<TData, TError, TVariables, TContext>({
    mutationFn,
    ...options,
  });
};
