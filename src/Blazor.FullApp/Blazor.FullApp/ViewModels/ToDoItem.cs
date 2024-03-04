namespace Blazor.FullApp.ViewModels;

public class ToDoItem
{
    public  bool IsDone { get; set; }

    public string Description { get; set; }

    public DateTime? DoneDate { get; set; }

    public string Tag { get; set; }
}