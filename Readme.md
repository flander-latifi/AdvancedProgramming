# AI-Assisted Coding Exercise

## Language Choice
**JavaScript** was selected for this exercise because:
- Widely used in both frontend/backend development
- Node.js enables server-side scripting
- Asynchronous programming model aligns with modern development
- Familiarity with browser/console environments

## AI Utilization
**Interaction Strategy:**
1. Initial prompt specifying all requirements
2. Iterative refinement through follow-up questions
3. Explicit requests for error handling and best practices
4. Code explanation requests to ensure understanding

**Effective Prompts:**
- "Create a JavaScript program that..."
- "Include proper error handling for input"
- "Explain the code structure"
- "Modify to use async/await"

## Valuable AI Contributions
1. **Code Structure:** Modular function design with clear separation of concerns
2. **Error Handling:** Comprehensive try/catch/finally pattern
3. **Date Formatting:** `toLocaleString()` for user-friendly timestamps
4. **Validation Logic:** Input sanitization and emptiness check
5. **Documentation:** JSDoc comments for function documentation


## Lessons Learned
1. **AI as Collaborator:** 
   - Generates 80% of boilerplate code quickly
   - Requires human oversight for edge cases
   - Excels at pattern recognition and best practice suggestions

2. **Verification Importance:**
   - Tested all code paths (valid/invalid/empty input)
   - Verified Node.js compatibility
   - Checked for resource leaks (file handles, etc.)

3. **Knowledge Gaps Identified:**
   - Need to better understand async JavaScript patterns
   - Deeper exploration of Node.js modules required
   - Error handling strategies in callback-based code

4. **Workflow Improvement:**
   - Use AI for rapid prototyping
   - Combine with manual testing/debugging
   - Always document AI-generated code

**Screenshot**
![alt text](<Screenshot 2025-03-10 095749.png>)

## Running the Program
```bash
node hello_world.js