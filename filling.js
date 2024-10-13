// Wait 30 seconds before showing the success animation
setTimeout(function () {
    // Hide the processing animation
    document.getElementById('processing').style.display = 'none';

    // Show the success animation (checkmark)
    document.getElementById('checkmarkWrapper').style.display = 'inline-block';

    // Show the success heading
    document.getElementById('successHeading').style.display = 'block';

    // Show the success message
    document.getElementById('successMessage').style.display = 'block';
}, 30000); // 30 seconds delay