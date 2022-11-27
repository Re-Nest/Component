import {Div} from "../Util/Tags";
import {DotProp, Prop, View, ViewWrapper} from "@renest/renest"

class ZStack extends View {
    @DotProp alignmentH:  "leading" | "center" | "tailing" = "center"
    @DotProp alignmentV:  "top" | "center" | "bottom"  = "center"
    @Prop children: any

    Body = () =>
        Div(...this.children)
            .height("max-content")
            .width("max-content")
            .display("grid")
            .alignItems(({
                "top": "flex-start",
                "center": "center",
                "bottom": "flex-end"
            } as any)[this.alignmentV])
            .justifyItems(({
                "leading": "left",
                "center": "center",
                "tailing": "right"
            } as any)[this.alignmentH])
            .forEachChild((child: any) => {
                if (child.IAmRTStyle) {
                    child
                        .position("relative")
                        .gridArea("1 / 1/ 1 / 1")
                }
            })
}


export default (...children: any[]) => ViewWrapper(ZStack)({children})

