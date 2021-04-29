Deployment location for this folder is <a href="https://sohrabsaran.github.io/softwareSkillsDemos/frontend/index.html">here</a>.

  /**
   * class names are not visible in the React DOM, hence using this as a workaround
   *
   * @param container
   * @param textContent
   */
  function getElementsIncludingSelfByTextContent(
    container: HTMLElement,
    textContent: string
  ): HTMLElement[] {
    const allEles = [container, ...container.querySelectorAll('*')];
    const filteredEles = allEles.filter((e) => {
      if (!(e instanceof HTMLElement)) {
        throw new Error('unexpected - this is not HTMLElement: ' + e.outerHTML);
      }
      const text = e.textContent;
      if (text == null) {
        throw new Error('unexpected - textContent is null: ' + e.outerHTML);
      }
      return text.trim() === textContent;
    });
    return filteredEles as HTMLElement[];
  }
