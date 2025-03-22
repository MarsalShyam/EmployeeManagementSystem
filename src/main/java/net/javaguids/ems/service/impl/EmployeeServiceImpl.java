package net.javaguids.ems.service.impl;

import net.javaguids.ems.dto.EmployeeDto;
import net.javaguids.ems.entity.Employee;
import net.javaguids.ems.mapper.EmployeeMapper;
import net.javaguids.ems.repository.EmployeeRepository;
import net.javaguids.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee= EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee=employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
}
