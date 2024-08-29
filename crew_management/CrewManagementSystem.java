import java.io.*;
import java.util.*;
import java.util.stream.Collectors;

public class CrewManagementSystem {
    private static final int NUM_BUSES_A_TO_B = 5;
    private static final int NUM_BUSES_B_TO_A = 5;
    private static final String DRIVER_FILE = "driver.csv";
    private static final String CONDUCTOR_FILE = "conductor.csv";
    private static final String GUARD_FILE = "guard.csv";

    private static List<CrewMember> loadCrewMembers(String filePath, String type) throws IOException {
        List<CrewMember> crewMembers = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            String line;
            br.readLine(); // Skip header line
            while ((line = br.readLine()) != null) {
                String[] fields = line.split(",");
                if (fields.length == 5) {
                    crewMembers.add(new CrewMember(fields[0], fields[1], fields[2], fields[3], fields[4], type));
                }
            }
        }
        return crewMembers;
    }

    private static List<CrewMember> selectCrewMembers(List<CrewMember> crewMembers, String location) {
        List<CrewMember> filteredMembers = crewMembers.stream()
                .filter(c -> c.getLocation().equals(location))
                .collect(Collectors.toList());
        Collections.shuffle(filteredMembers); // Shuffle for random selection
        return filteredMembers;
    }

    private static void assignCrewToBuses(String direction, int numBuses) throws IOException {
        List<CrewMember> drivers = loadCrewMembers(DRIVER_FILE, "Driver");
        List<CrewMember> conductors = loadCrewMembers(CONDUCTOR_FILE, "Conductor");
        List<CrewMember> guards = loadCrewMembers(GUARD_FILE, "Guard");

        String location = direction.equals("AtoB") ? "A" : "B";
        Set<String> usedDrivers = new HashSet<>();
        Set<String> usedConductors = new HashSet<>();
        Set<String> usedGuards = new HashSet<>();

        System.out.println("Crew Assignment for " + direction + " Route:");
        for (int i = 0; i < numBuses; i++) {
            CrewMember driver = getRandomAvailableCrewMember(selectCrewMembers(drivers, location), usedDrivers);
            CrewMember conductor = getRandomAvailableCrewMember(selectCrewMembers(conductors, location), usedConductors);
            CrewMember guard = getRandomAvailableCrewMember(selectCrewMembers(guards, location), usedGuards);

            if (driver != null && conductor != null && guard != null) {
                System.out.println("Bus " + (i + 1) + ": Driver: " + driver.getName() + ", Conductor: " + conductor.getName() + ", Guard: " + guard.getName());
            } else {
                System.out.println("Bus " + (i + 1) + ": Not enough crew members available.");
            }
        }
        System.out.println();
    }

    private static CrewMember getRandomAvailableCrewMember(List<CrewMember> crewMembers, Set<String> usedIds) {
        for (CrewMember member : crewMembers) {
            if (!usedIds.contains(member.getId())) {
                usedIds.add(member.getId());
                return member;
            }
        }
        return null; // No available crew member
    }

    public static void main(String[] args) {
        try {
            assignCrewToBuses("AtoB", NUM_BUSES_A_TO_B);
            assignCrewToBuses("BtoA", NUM_BUSES_B_TO_A);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

class CrewMember {
    private String id;
    private String name;
    private String phone;
    private String email;
    private String location;
    private String type;

    public CrewMember(String id, String name, String phone, String email, String location, String type) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.location = location;
        this.type = type;
    }

    public String getId() {
        return id;
    }

    public String getLocation() {
        return location;
    }

    public String getName() {
        return name;
    }
}
