import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
    selector: 'page-post',
    templateUrl: 'post.html'
})
export class PostPage {

    public post;
    public comment = '';
    public loading = false

    constructor(public navCtrl: NavController, public http: Http, private navParams: NavParams) {
        this.post = this.navParams.get('post');
    }

    addComment() {
        this.loading = true;
        this.http.post('http://web2.dev/api/comments', {
            user_id: 3,
            blog_post_id: this.post.id,
            content: this.comment
        }).map(res => res.json()).subscribe((comments) => {
            this.comment = '';
            this.post.comments = comments;
            this.loading = false;
        }, error => {
            console.log(error)
            this.loading = false;
        });
    }

}
