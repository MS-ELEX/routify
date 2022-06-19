/// <reference types="svelte/types/runtime/ambient" />
/**
 * @extends RNode<typeof import('./RoutifyRuntime')['RoutifyRuntime']>
 */
export class RNodeRuntime extends RNode<typeof import("./RoutifyRuntime").RoutifyRuntime> {
    /**
     * @param {string} name
     * @param {LoadSvelteModule} module
     * @param {RoutifyRuntime} instance
     */
    constructor(name: string, module: LoadSvelteModule, instance: RoutifyRuntime);
    /** @returns {this[]} */
    get pages(): RNodeRuntime[];
    /** @ts-ignore SvelteComponentConstructor is only available in VSCode */
    /** @returns {Promise<SvelteComponentConstructor<*, *>>} */
    getRawComponent(): Promise<SvelteComponentConstructor<any, any>>;
    /** @returns {() => Node} */
    get component(): () => Node;
    /**
     * @param {object} snapshotRoot
     */
    importTree: (snapshotRoot: object) => RNodeRuntime;
    get _fallback(): any;
    #private;
}
import { RNode } from "../../common/RNode.js";
import Node from "*.svelte";
