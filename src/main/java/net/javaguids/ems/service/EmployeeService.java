package net.javaguids.ems.service;

import net.javaguids.ems.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long employeeId,EmployeeDto updatedEmployee);

    void deleteEmployee(Long employeeId);

}
