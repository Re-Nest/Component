import {DotProp, ViewWrapper, View, Prop} from "@renest/renest";
import {Div} from "../Convert";

class HStack extends View {
    @DotProp spacing: any = "0px"
    @DotProp alignment: "top" | "center" | "bottom" = "top"
    @Prop children: any

    Body = () =>
        Div(...this.children)
            .height("max-content")
            .width("100%")
            .display("flex")
            .flexDirection("row")
            .columnGap(this.spacing)
            .forEachChild((child: any) => {
                if (child._name === "Spacer") {
                    child.flexGrow(1)
                } else if (child.IAmRTStyle) {
                    child.flexShrink(0)
                    if (this.alignment === "top") {
                        child.marginBottom("auto")
                    } else if (this.alignment === "bottom") {
                        child.marginTop("auto")
                    } else if (this.alignment === "center") {
                        child.marginTop("auto").marginBottom("auto")
                    }
                }
            })
}


export default (...children: any[]) => ViewWrapper(HStack)({children})
