#include "CGE/Base/GameStateManager.h"
#include "Menu.h"

int main(int argc, char* argv[])
{
	GameStateManager* manager = GameStateManager::GetPtr();
	manager->SetState(new Menu());
	manager->GameLoop();
	return 0;
}
