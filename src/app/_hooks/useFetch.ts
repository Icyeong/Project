import { MutationOptions, useMutation, useQuery } from "@tanstack/react-query";

export const useCustomQuery = (
  key: readonly string[],
  fn: any,
  gcTime?: number,
  staleTime?: number,
  initialData?: any,
) => {
  return useQuery({
    queryKey: key,
    queryFn: fn,
    gcTime,
    staleTime,
    initialData,
  });
};

interface CustomMutationOptions<TData, TError, TVariables, TContext = unknown>
  extends Omit<MutationOptions<TData, TError, TVariables, TContext>, "mutationFn"> {
  onSuccess?: (data: TData, variables: TVariables, context: TContext) => void;
  onError?: (error: TError, variables: TVariables, context: TContext | undefined) => void;
}

export const useCustomMutation = <TData, TError, TVariables, TContext = unknown>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: CustomMutationOptions<TData, TError, TVariables, TContext>,
) => {
  return useMutation<TData, TError, TVariables, TContext>({
    mutationFn,
    onSuccess: options?.onSuccess,
    onError: options?.onError,
    ...options,
  });
};
