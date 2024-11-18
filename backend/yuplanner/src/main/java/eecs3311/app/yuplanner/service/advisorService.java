
package eecs3311.app.yuplanner.service;

import java.util.List;
import eecs3311.app.yuplanner.model.advisor;

public interface advisorService {
    public advisor saveAdvisor(advisor advisor);
    public List<advisor> getAllAdvisors();
}
