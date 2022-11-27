import {View, ViewWrapper} from "@renest/renest";
import {HStack, NavigationView, VStack} from "../component";
import {Div} from "../component/Convert";
import Spacer from "../component/Other/Spacer";

class Content extends View {
    Body = () =>
        HStack(
            "hh",
            Spacer(),
            "ha",
            Spacer(),
            Spacer(),
            "jj"
        ).width("200px")
}

export default ViewWrapper(Content)