cur = db.students.find (); null;
while (cur.hasNext()) {
    var student = cur.next();
    var min = 100;
    var toRemove = null;
    for (var i = 0; i < student.scores.length; ++i) {
        if (student.scores[i].type == "homework") {
            if (student.scores[i].score < min) {
                min = student.scores[i].score;
                toRemove = student.scores[i];
            }
        }
    }
    if (toRemove) {
        db.students.update({
            _id: student._id
        }, {
            $pull: {
                "scores": {
                    type: "homework",
                    score: min
                }
            }
        }, false, true)
    }
}
