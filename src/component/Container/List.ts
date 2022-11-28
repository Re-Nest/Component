import {ConditionView, DotProp, ForEach, Prop, required, View, ViewWrapper} from "@renest/renest"
import HStack from "../Container/HStack";
import VStack from "../Container/VStack";
import {Div} from "../Convert";


class List extends View {
    @Prop arrData = required
    @Prop arrElem = required
    @DotProp horizontal = false
    @DotProp vertical = false
    @DotProp divider: "none" | "solid" | any = "none"
    @DotProp spacing: string = "0px"
    @DotProp alignment: "top" | "bottom" | "leading" | "tailing" | "center" = "center"
    @DotProp dividerColor = "#cdcdcd"

    get isHorizontal() {
        return !(this.vertical ?? true) && (this.horizontal ?? true)
    }
    get stack() {
        return this.isHorizontal ? HStack : VStack
    }

    Body = () =>
        ConditionView(this.divider,  {
            none: () =>
                this.stack(
                    ForEach(this.arrData, this.arrElem)
                )
                    .spacing(this.spacing)
                    .alignment(this.alignment),
            _: () =>
                this.stack(
                    ForEach(Array(this.arrData.length*2-1).fill(0), (_, idx) =>
                        ConditionView(idx % 2, {
                            0: () => this.arrElem(this.arrData[idx / 2], idx / 2),
                            1: () =>
                                ConditionView(this.divider, {
                                    solid: () =>
                                        Div()
                                            .backgroundColor(this.dividerColor)
                                            .width(this.isHorizontal ? "1px" : "calc(100% - 10px)")
                                            .height(this.isHorizontal ? "calc(100% - 10px)" : "1px")
                                            .margin(this.isHorizontal ? "5px 0" : "0 5px"),
                                    _: this.divider
                                }).key(this.arrData.length+(idx-1)/2)
                        })
                    )
                )
                    .spacing(this.spacing)
                    .alignment(this.alignment)
        })

}


export default function<T=any>(arrData: T[] | Range, arrElem: (item: T, idx: number) => any) {
    return ViewWrapper(List)({arrData, arrElem})
}