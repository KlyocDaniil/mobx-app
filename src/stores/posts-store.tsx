import { makeAutoObservable, runInAction } from "mobx";
import { Posts, getPosts } from "../api/getPosts";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils"

class PostsStore {
    posts?: IPromiseBasedObservable<Posts[]>

    constructor() {
        makeAutoObservable(this);
    }

    getPostsAction = () => {
        this.posts = fromPromise(getPosts())
    }
}

export default new PostsStore();
