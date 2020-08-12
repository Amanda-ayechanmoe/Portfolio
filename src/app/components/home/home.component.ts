import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  myResumeName = "Resume_Amanda_Aye_Chan_Moe.docx";
  fileUrl = "assets/docs/Resume_Amanda_Aye_Chan_Moe.docx";

  constructor() {}

  ngOnInit() {}
}
