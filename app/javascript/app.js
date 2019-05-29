$(document).ready(function(){

    $("#surveyBtn").on("click", function(event) {

        event.preventDefault();

        var formValid = true;

        console.log("Survey submitted!");

        var name = $("#friendName").val().trim();
        var photo = $("#friendPhoto").val().trim();
        var questionOne = $("#questionOne").val().trim();
        var questionTwo= $("#questionTwo").val().trim();
        var questionThree = $("#questionThree").val().trim();
        var questionFour = $("#questionFour").val().trim();
        var questionFive = $("#questionFive").val().trim();
        var questionSix = $("#questionSix").val().trim();
        var questionSeven = $("#questionSeven").val().trim();
        var questionEight = $("#questionEight").val().trim();
        var questionNine = $("#questionNine").val().trim();
        var questionTen = $("#questionTen").val().trim();

        var newFriend = {
            "name": name,
            "photo": photo,
            "scores": [
                questionOne,
                questionTwo,
                questionThree,
                questionFour,
                questionFive,
                questionSix,
                questionSeven,
                questionEight,
                questionNine,
                questionTen
            ]
        };

        console.log(newFriend);

        if (newFriend.name === "") {
            $("#errorMessage").text("No name provided.");
            $("#errorAction").text("Please! Provide your name in the correct field to continue.");
            $("#errorModal").modal("show");
            return false;
        } 

        else if (newFriend.photo === "") {
            $("#errorMessage").text("No photo provided.");
            $("#errorAction").text("Please! Provide a link to a photo of yourself in the correct field to continue.");
            $("#errorModal").modal("show");
            return false;
        }

        else if (questionOne === "Choose . . ." || questionTwo === "Choose . . ." || questionThree === "Choose . . ." || questionFour === "Choose . . ." || questionFive === "Choose . . ." || questionSix === "Choose . . ." || questionSeven === "Choose . . ." || questionEight === "Choose . . ." || questionNine === "Choose . . ." || questionTen === "Choose . . .") {
            $("#errorMessage").text("One or more survey questions are not answered!")
            $("#errorAction").text("Please!  Provide an answer for ALL of the questions to continue.");
            $("#errorModal").modal("show");
        }

        else {
            $.post("/api/friends", newFriend, function(data){
                console.log(data);
                console.log("Yay!  Survey submitted.");

                $("#bestFriendName").text(data.name);
                $("#bestFriendPhoto").attr("src", data.photo).addClass("img-fluid");

                $("#bestFriendModal").modal("show");

                $("#friendName").val("");
                $("#friendPhoto").val("");
                $("#questionOne").val("Choose . . .");
                $("#questionTwo").val("Choose . . .");
                $("#questionThree").val("Choose . . .");
                $("#questionFour").val("Choose . . .");
                $("#questionFive").val("Choose . . .");
                $("#questionSix").val("Choose . . .");
                $("#questionSeven").val("Choose . . .");
                $("#questionEight").val("Choose . . .");
                $("#questionNine").val("Choose . . .");
                $("#questionTen").val("Choose . . .");

            });
        }
    });

});
