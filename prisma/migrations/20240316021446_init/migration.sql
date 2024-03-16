-- CreateTable
CREATE TABLE `Aluno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `responsavel` VARCHAR(191) NOT NULL,
    `dataNascimento` DATETIME(3) NOT NULL,
    `observacao` VARCHAR(191) NULL,
    `turma` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChamadaJuniores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Data` DATETIME(3) NOT NULL,
    `Professor` VARCHAR(191) NOT NULL,
    `Titulo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AlunoChamadaJunior` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `NomeAluno` VARCHAR(191) NOT NULL,
    `Presenca` VARCHAR(191) NOT NULL,
    `ChamadaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChamadaMaternal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Data` DATETIME(3) NOT NULL,
    `Professor` VARCHAR(191) NOT NULL,
    `Titulo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AlunoChamadaMaternal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `NomeAluno` VARCHAR(191) NOT NULL,
    `Presenca` VARCHAR(191) NOT NULL,
    `ChamadaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AlunoChamadaJunior` ADD CONSTRAINT `AlunoChamadaJunior_ChamadaId_fkey` FOREIGN KEY (`ChamadaId`) REFERENCES `ChamadaJuniores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlunoChamadaMaternal` ADD CONSTRAINT `AlunoChamadaMaternal_ChamadaId_fkey` FOREIGN KEY (`ChamadaId`) REFERENCES `ChamadaMaternal`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
