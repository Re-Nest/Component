import {View, ViewWrapper} from "@renest/renest"
import {Div} from "../Convert";

class Spacer extends View {
    _name = "Spacer"
    Body = () =>
        Div()
}


export default ViewWrapper(Spacer)
