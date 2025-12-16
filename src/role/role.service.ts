import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoleService {
 constructor(
  @InjectRepository(Role)
  private readonly roleRepository: Repository<Role>,
 ) {}


  async create(createRoleDto: CreateRoleDto) : Promise<Role> {
    const role = this.roleRepository.create({
      ...createRoleDto,
    });
    return await this.roleRepository.save(role);
    }


  async findAll(): Promise<Role[]> {
    return await this.roleRepository.find();
  }


  async findOne(id: number) : Promise<Role> {
    const role = await this.roleRepository.findOne({
      where: { id },
    });
    if(!role){
      throw new Error(`Role with ID ${id} not found`);
    }
    return role;
  }

  async update(id: number, updateUserDto: UpdateRoleDto): Promise<Role> {
    const role = await this.findOne(id);

    Object.assign(role, {
      ...updateUserDto,
      nationalNumber: updateUserDto.roleName
        ? String(updateUserDto.roleName)
        : role.roleName,
    });

    return await this.roleRepository.save(role);
  }


  async remove(id: number) : Promise<{ message: string }> {
    const role = await this.findOne(id);
    await this.roleRepository.remove(role);
    return { message: 'Role deleted successfully' };
  }
}
