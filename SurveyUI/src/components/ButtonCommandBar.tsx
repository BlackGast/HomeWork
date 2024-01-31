// import { CommandBarButton, IIconProps, IStackStyles, Stack } from "@fluentui/react";
// import { IButtonProps } from "../App";

// const textDocument: IIconProps = {
//     iconName: "TextDocument",
//     style: { color: "black" },
//   };
//   const checkBox: IIconProps = {
//     iconName: "CheckboxComposite",
//     style: { color: "black" },
//   };
//   const radioBtn: IIconProps = {
//     iconName: "RadioBtnOn",
//     style: { color: "black" },
//   };
//   const calendar: IIconProps = {
//     iconName: "Calendar",
//     style: { color: "black" },
//   };
//   const ratingStar: IIconProps = {
//     iconName: "FavoriteStar",
//     style: { color: "black" },
//   };
  
  
//   const stackStyles: Partial<IStackStyles> = {
//     root: "menu",
//   };
  
//   export const ButtonCommandBar: React.FunctionComponent<IButtonProps> = (
//     props
//   ) => {
//     const { disabled, checked } = props;
  
//     function addTextQuestion(): void {
//       console.log('Click');
//     }
//     function addCheckboxQuestion(): void {
//       console.log('Click');
//     }
//     function addRadioBtnQuestion(): void {
//       console.log('Click');
//     }
//     function addDataQuestion(): void {
//       console.log('Click');
//     }
//     function addRatingScaleQuestion(): void {
//       console.log('Click');
//     }
  
//     return (
//       <Stack horizontal styles={stackStyles}>
//         <CommandBarButton
//           iconProps={textDocument}
//           text="Text"
//           disabled={disabled}
//           checked={checked}
//           onClick={addTextQuestion}
//         />
//         <CommandBarButton
//           iconProps={checkBox}
//           text="Checkboxes"
//           disabled={disabled}
//           checked={checked}
//           onClick={addCheckboxQuestion}
//         />
//         <CommandBarButton
//           iconProps={radioBtn}
//           text="Radio Button Text"
//           disabled={disabled}
//           checked={checked}
//           onClick={addRadioBtnQuestion}
//         />
//         <CommandBarButton
//           iconProps={calendar}
//           text="Data"
//           disabled={disabled}
//           checked={checked}
//           onClick={addDataQuestion}
//         />
//         <CommandBarButton
//           iconProps={ratingStar}
//           text="Rating Scale"
//           disabled={disabled}
//           checked={checked}
//           onClick={addRatingScaleQuestion}
//         />
//       </Stack>
//     );
//   };