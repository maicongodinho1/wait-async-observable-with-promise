import { Component, OnInit, VERSION } from "@angular/core";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;

  public ngOnInit(): void {
    // just chilling 🌴 until the stackblitz log something before the magic
    setTimeout(() => this.go(), 1000);
  }

  async go() {
    // do somenthing before
    console.log('before ⬅️');
    
    // wait for come back ⏳
    await this.isValid().then(isValid => {
      // do somenthing with the result
      if (isValid) {
        console.log('is valid! 🥳');
      } else {
        console.log('is not valid! 🎈');
      }
    });

    console.log('after ➡️');
    // do somenthing after
  }

  isValid(): Promise<boolean> {
    // just a promise return from a mocked async observable
    return of(1 + 1 === 2).pipe(delay(3000)).toPromise();
  }

}
