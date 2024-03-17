import Debug "mo:base/Debug";
import List "mo:base/List";

actor _dkeeper{
	public type note = {
		title : Text;
		content : Text;
	};

	var notes : List.List<note> = List.nil<note>();
	public func createNote(titleText: Text, contentText: Text){
		let newNote : note = {
			title = titleText;
			content = contentText
		};
		notes := List.push(newNote,notes);
		Debug.print(debug_show(notes));
	}
}