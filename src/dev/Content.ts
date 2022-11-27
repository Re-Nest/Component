import {
    Theme,
    ThemeProvider,
    View,
    ViewWrapper
} from "@renest/renest";
import TopBar from "./TopBar";
import TextFieldDisplay from "./routes/TextFieldDisplay";
import ImageDisplay from "./routes/ImageDisplay";
import ProgressDisplay from "./routes/ProgressDisplay";
import ContextDisplay from "./routes/ContextDisplay";
import ToggleDisplay from "./routes/ToggleDisplay";
import ListDisplay from "./routes/ListDisplay";
import {HStack, Paper, VStack, ZStack, Text, NavigationView, Button, Spacer} from "../component";

let myThemes = {
    first: {
        Button: {
            bg: "#00AAFF",
            border: "#00FF00",
            fg: "#00AAFF"
        }
    },
    second: {
        Button: {
            bg: "#AA00AA",
            border: "#666666",
            fg: "#AA88AA"
        }
    }
}

class Content extends View {
    @Theme myTheme: any = [myThemes, "second"]

    Body = () =>
        // ThemeProvider(
            ZStack(
                Paper()
                    .width("1000px")
                    .height("1000px")
                ,
                VStack(
                    TopBar()
                        .padding("20px"),
                    NavigationView({
                        "/": () => HStack(Text("hh"), Spacer(), Text("hah")),
                        textField: () => TextFieldDisplay(),
                        list: () => ListDisplay(),
                        toggle: () => ToggleDisplay(),
                        image: () => ImageDisplay(),
                        progress: () => ProgressDisplay(),
                        context: () => ContextDisplay(),
                        ":abc+": (value:any) => HStack("abc",value), // regExp
                        ":[a+]": (value:any) => HStack("no",value), // regExp
                        ":": (value:any) => HStack("other", value), // any other route
                    })
                ).padding("20px")
            )
                .alignmentH("leading")
                .alignmentV("top")
                .padding("70px")
        // )
        //     .useTheme(this.myTheme)
}





export default ViewWrapper(Content)