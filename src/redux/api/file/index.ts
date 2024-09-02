import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    uploadFile: build.mutation<
      FILE.UPLOADFILE.SuccessResponse,
      FILE.UPLOADFILE.Arg
    >({
      query: (file) => {
        const formData = new FormData();
        formData.append("file", file);
        return {
          url: "upload/file",
          method: "POST",
          body: formData,
        };
      },
    }),
    uploadFiles: build.mutation<
      FILE.UPLOADFILES.SuccessResponse,
      FILE.UPLOADFILES.Arg
    >({
      query: (files) => {
        const formData = new FormData();
        Array.from(files).forEach((file) => {
          formData.append("files", file);
        });

        return {
          url: "upload/files",
          method: "POST",
          body: formData,
        };
      },
    }),
  }),
});
export const { useUploadFileMutation, useUploadFilesMutation } = api;
