# enum -default
# nodemailer
# react-hook-form
1.useForm:
2.destructure useForm to get register(pattern,validate),control(usein devTool from {@hookform/devtools}),handleSubmit
# dropzone :
1.useDropZone 
2.destructure useDropzone:
  * getInputProps:pass as spread operator in input
  * getRootProps:pass as spread operator in element in element
  * isDragReject
  * isFocused
  * isDragActive:use as ternary opeator befor drag or after drag
3. inside bracket in dropzone :
  * onDrop:useCallback:pass as callback
  * onDragEnter
  * onDragLeave
  * onDragOver
  * onDropAccepted
  * onDropRejected
