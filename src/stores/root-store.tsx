import CounterStore from "./counter-store";
import postsStore from "./posts-store";

class RootStore {
    post = postsStore
    counts = CounterStore
}

export default RootStore;