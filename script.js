function moveNext(input) {
            if (input.value.length === 1) {
                let next = input.nextElementSibling;
                if (next) next.focus();
            }
        }
        
        function handleBackspace(input) {
            if (event.key === "Backspace" && input.value.length === 0) {
                let prev = input.previousElementSibling;
                if (prev) prev.focus();
            }
        }