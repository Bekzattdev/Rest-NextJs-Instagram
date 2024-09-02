namespace FILE {
  namespace UPLOADFILE {
    type Arg = File;
    type SuccessResponse = {
      name: string;
      format: string;
      url: string;
    };
  }
  namespace UPLOADFILES {
    type Arg = FileList;
    type SuccessResponse = UPLOADFILE.SuccessResponse[];
  }
}
