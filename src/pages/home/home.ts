import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {PostPage} from "../post/post";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public posts = [];
    public loading = true;

    constructor(public navCtrl: NavController, public http: Http) {
        this.http.get('http://web2.dev/api/posts').map(res => res.json()).subscribe((posts) => {
            this.posts = posts;
            this.loading = false;
        }, error => {
            console.log(error)
            this.loading = false;
        });
    }

    openPost(post) {
        this.navCtrl.push(PostPage, {
            post: post
        })
    }

}
