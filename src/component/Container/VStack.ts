import {DotProp, ViewWrapper, View, Prop} from "@renest/renest"
import {Div} from "../Convert";

class VStack extends View {
    @DotProp spacing: any = "0px"
    @DotProp alignment:  "leading" | "center" | "tailing" = "leading"
    @Prop children: any

    Body = () =>
        Div(...this.children)
            .height("100%")
            .width("max-content")
            .display("flex")
            .flexDirection("column")
            .rowGap(this.spacing)
            .forEachChild((child: any) => {
                if (child._name === "Spacer") {
                    child.flexGrow(1)
                } else if (child.IAmRTStyle) {
                    child.flexShrink(0)
                    if (this.alignment === "leading") {
                        child.marginRight("auto")
                    } else if (this.alignment === "tailing") {
                        child.marginLeft("auto")
                    } else if (this.alignment === "center") {
                        child.marginLeft("auto").marginRight("auto")
                    }
                }
        })
}


export default (...children: any[]) => ViewWrapper(VStack)({children})


