public class Route {
    private int id;
    private String startPoint;
    private String endPoint;

    public Route(int id, String startPoint, String endPoint) {
        this.id = id;
        this.startPoint = startPoint;
        this.endPoint = endPoint;
    }

    public int getId() {
        return id;
    }

    public String getStartPoint() {
        return startPoint;
    }

    public String getEndPoint() {
        return endPoint;
    }
}
