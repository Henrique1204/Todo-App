import { RenderHookResult } from "@testing-library/react";

class HookStateControl<T> {
  constructor(private renderResult: RenderHookResult<T, T>) {}

  public get render() {
    return this.renderResult;
  }

  public get state() {
    const { result } = this.renderResult;

    return result.current;
  }
}

export default HookStateControl;
