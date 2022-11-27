import {View, ViewWrapper} from "@renest/renest";
import {HStack, NavigationView, VStack} from "../component";
import {Div} from "../component/Convert";

class Content extends View {
    Body = () =>
        NavigationView({
            hh: () => Div("hh"),
            ":": () => "now"
        })
}

export default ViewWrapper(Content)