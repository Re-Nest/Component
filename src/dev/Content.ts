import {Hook, Prop, required, State, View, ViewWrapper} from "@renest/renest";
import {HStack, NavigationView, VStack} from "../component";
import {Button, Div} from "../component/Convert";
import Spacer from "../component/Other/Spacer";
import {useNavigate} from "react-router-dom";


class SubView1 extends View {
    @Hook(useNavigate) navigate: any
    Body = () =>
        VStack(
            Button("click1")
                .onClick(() => {
                    this.navigate(`/1`)
                }),
            Button("click2")
                .onClick(() => {
                    this.navigate(`/2`)
                })
        )
}
const Sub1 = ViewWrapper(SubView1)

class SubView2 extends View {
    @Prop n = required
    Body = () =>
        Div(this.n)
}
const Sub2 = ViewWrapper(SubView2)
class Content extends View {
    Body = () =>
        HStack(
            Sub1(),
            NavigationView({
                "/": () => Div("hh"),
                ":": n => Sub2({n})
            })
        ).width("200px")
}

export default ViewWrapper(Content)