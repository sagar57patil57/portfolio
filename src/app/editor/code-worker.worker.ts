// Web Worker for executing user code
self.onmessage = function(e) {
    const code = e.data;
    let output;
    const logs: any = [];
  
    // Override console.log to capture logs
    const originalConsoleLog = console.log;
    console.log = function(...args) {
      logs.push(args.join(' '));
      originalConsoleLog.apply(console, args);
    };
  
    try {
      // Use eval to execute the user code (caution!)
      output = eval(code);
      self.postMessage({ success: true, output, logs });
    } catch (error: any) {
      self.postMessage({ success: false, error: error.message });
    } finally {
      // Restore original console.log function
      console.log = originalConsoleLog;
    }
  };
  