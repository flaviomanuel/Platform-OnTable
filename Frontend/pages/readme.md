    const context = canvas.current.getContext("2d");

    const dpr = window.devicePixelRatio;
    const rect = canvas.current.getBoundingClientRect();

    // Set the "actual" size of the canvas
    canvas.current.width = rect.width * dpr;
    canvas.current.height = rect.height * dpr;

    // Scale the context to ensure correct drawing operations
    context.scale(dpr, dpr);

    // Set the "drawn" size of the canvas
    canvas.current.style.width = `${rect.width}px`;
    canvas.current.style.height = `${rect.height}px`;
    context.clearRect(0, 0, context.width, context.height);
    context.translate(0.5, 0.5);
    const height = canvas.current.offsetHeight;
    const width = canvas.current.offsetWidth;
    var width1 = canvas.current.scrollWidth;
    var height1 = canvas.current.scrollHeight;
    console.log(width1, height1);
    console.log(width, height);
    const h = 100;
    const w = 100;

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 5; c++) {
        context.rect(0, 0, r * h, c * w);
        console.log(r * h, c * w);
      }
    }
    context.stroke();