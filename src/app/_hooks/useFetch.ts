import { useMutation, useQuery } from "@tanstack/react-query";

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

export const useCustomMutation = (key: readonly string[], fn: any, onSuccess: any, onError: any) => {
  return useMutation({
    mutationKey: key,
    mutationFn: fn,
    onSuccess,
    onError,
  });
};
