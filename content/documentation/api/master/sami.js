
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:PHPoole" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="PHPoole.html">PHPoole</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:PHPoole_Collection" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="PHPoole/Collection.html">Collection</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:PHPoole_Collection_Menu" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="PHPoole/Collection/Menu.html">Menu</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:PHPoole_Collection_Menu_Collection" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="PHPoole/Collection/Menu/Collection.html">Collection</a>                    </div>                </li>                            <li data-name="class:PHPoole_Collection_Menu_Entry" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="PHPoole/Collection/Menu/Entry.html">Entry</a>                    </div>                </li>                            <li data-name="class:PHPoole_Collection_Menu_Menu" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="PHPoole/Collection/Menu/Menu.html">Menu</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:PHPoole_Collection_Page" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="PHPoole/Collection/Page.html">Page</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:PHPoole_Collection_Page_Page" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="PHPoole/Collection/Page/Page.html">Page</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:PHPoole_Collection_Taxonomy" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="PHPoole/Collection/Taxonomy.html">Taxonomy</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:PHPoole_Collection_Taxonomy_Collection" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="PHPoole/Collection/Taxonomy/Collection.html">Collection</a>                    </div>                </li>                            <li data-name="class:PHPoole_Collection_Taxonomy_Term" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="PHPoole/Collection/Taxonomy/Term.html">Term</a>                    </div>                </li>                            <li data-name="class:PHPoole_Collection_Taxonomy_Vocabulary" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="PHPoole/Collection/Taxonomy/Vocabulary.html">Vocabulary</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:PHPoole_Collection_Collection" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Collection/Collection.html">Collection</a>                    </div>                </li>                            <li data-name="class:PHPoole_Collection_CollectionInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Collection/CollectionInterface.html">CollectionInterface</a>                    </div>                </li>                            <li data-name="class:PHPoole_Collection_Item" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Collection/Item.html">Item</a>                    </div>                </li>                            <li data-name="class:PHPoole_Collection_ItemInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Collection/ItemInterface.html">ItemInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:PHPoole_Converter" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="PHPoole/Converter.html">Converter</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:PHPoole_Converter_Converter" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Converter/Converter.html">Converter</a>                    </div>                </li>                            <li data-name="class:PHPoole_Converter_ConverterInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Converter/ConverterInterface.html">ConverterInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:PHPoole_Exception" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="PHPoole/Exception.html">Exception</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:PHPoole_Exception_Exception" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Exception/Exception.html">Exception</a>                    </div>                </li>                            <li data-name="class:PHPoole_Exception_ExceptionInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Exception/ExceptionInterface.html">ExceptionInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:PHPoole_Generator" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="PHPoole/Generator.html">Generator</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:PHPoole_Generator_AbstractGenerator" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Generator/AbstractGenerator.html">AbstractGenerator</a>                    </div>                </li>                            <li data-name="class:PHPoole_Generator_Alias" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Generator/Alias.html">Alias</a>                    </div>                </li>                            <li data-name="class:PHPoole_Generator_ExternalBody" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Generator/ExternalBody.html">ExternalBody</a>                    </div>                </li>                            <li data-name="class:PHPoole_Generator_GeneratorInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Generator/GeneratorInterface.html">GeneratorInterface</a>                    </div>                </li>                            <li data-name="class:PHPoole_Generator_GeneratorManager" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Generator/GeneratorManager.html">GeneratorManager</a>                    </div>                </li>                            <li data-name="class:PHPoole_Generator_Homepage" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Generator/Homepage.html">Homepage</a>                    </div>                </li>                            <li data-name="class:PHPoole_Generator_PagesFromConfig" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Generator/PagesFromConfig.html">PagesFromConfig</a>                    </div>                </li>                            <li data-name="class:PHPoole_Generator_Pagination" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Generator/Pagination.html">Pagination</a>                    </div>                </li>                            <li data-name="class:PHPoole_Generator_Section" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Generator/Section.html">Section</a>                    </div>                </li>                            <li data-name="class:PHPoole_Generator_Taxonomy" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Generator/Taxonomy.html">Taxonomy</a>                    </div>                </li>                            <li data-name="class:PHPoole_Generator_TitleReplace" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Generator/TitleReplace.html">TitleReplace</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:PHPoole_Page" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="PHPoole/Page.html">Page</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:PHPoole_Page_NodeType" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Page/NodeType.html">NodeType</a>                    </div>                </li>                            <li data-name="class:PHPoole_Page_Parser" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Page/Parser.html">Parser</a>                    </div>                </li>                            <li data-name="class:PHPoole_Page_VariableTrait" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Page/VariableTrait.html">VariableTrait</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:PHPoole_Renderer" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="PHPoole/Renderer.html">Renderer</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:PHPoole_Renderer_Twig" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="PHPoole/Renderer/Twig.html">Twig</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:PHPoole_Renderer_Twig_Extension" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="PHPoole/Renderer/Twig/Extension.html">Extension</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:PHPoole_Renderer_Layout" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Renderer/Layout.html">Layout</a>                    </div>                </li>                            <li data-name="class:PHPoole_Renderer_RendererInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Renderer/RendererInterface.html">RendererInterface</a>                    </div>                </li>                            <li data-name="class:PHPoole_Renderer_Twig" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Renderer/Twig.html">Twig</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:PHPoole_Step" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="PHPoole/Step.html">Step</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:PHPoole_Step_AbstractStep" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Step/AbstractStep.html">AbstractStep</a>                    </div>                </li>                            <li data-name="class:PHPoole_Step_ConvertPages" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Step/ConvertPages.html">ConvertPages</a>                    </div>                </li>                            <li data-name="class:PHPoole_Step_CopyStatic" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Step/CopyStatic.html">CopyStatic</a>                    </div>                </li>                            <li data-name="class:PHPoole_Step_CreatePages" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Step/CreatePages.html">CreatePages</a>                    </div>                </li>                            <li data-name="class:PHPoole_Step_GenerateMenus" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Step/GenerateMenus.html">GenerateMenus</a>                    </div>                </li>                            <li data-name="class:PHPoole_Step_GeneratePages" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Step/GeneratePages.html">GeneratePages</a>                    </div>                </li>                            <li data-name="class:PHPoole_Step_LocateContent" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Step/LocateContent.html">LocateContent</a>                    </div>                </li>                            <li data-name="class:PHPoole_Step_RenderPages" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Step/RenderPages.html">RenderPages</a>                    </div>                </li>                            <li data-name="class:PHPoole_Step_StepInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="PHPoole/Step/StepInterface.html">StepInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:PHPoole_Config" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="PHPoole/Config.html">Config</a>                    </div>                </li>                            <li data-name="class:PHPoole_PHPoole" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="PHPoole/PHPoole.html">PHPoole</a>                    </div>                </li>                            <li data-name="class:PHPoole_Util" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="PHPoole/Util.html">Util</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "PHPoole.html", "name": "PHPoole", "doc": "Namespace PHPoole"},{"type": "Namespace", "link": "PHPoole/Collection.html", "name": "PHPoole\\Collection", "doc": "Namespace PHPoole\\Collection"},{"type": "Namespace", "link": "PHPoole/Collection/Menu.html", "name": "PHPoole\\Collection\\Menu", "doc": "Namespace PHPoole\\Collection\\Menu"},{"type": "Namespace", "link": "PHPoole/Collection/Page.html", "name": "PHPoole\\Collection\\Page", "doc": "Namespace PHPoole\\Collection\\Page"},{"type": "Namespace", "link": "PHPoole/Collection/Taxonomy.html", "name": "PHPoole\\Collection\\Taxonomy", "doc": "Namespace PHPoole\\Collection\\Taxonomy"},{"type": "Namespace", "link": "PHPoole/Converter.html", "name": "PHPoole\\Converter", "doc": "Namespace PHPoole\\Converter"},{"type": "Namespace", "link": "PHPoole/Exception.html", "name": "PHPoole\\Exception", "doc": "Namespace PHPoole\\Exception"},{"type": "Namespace", "link": "PHPoole/Generator.html", "name": "PHPoole\\Generator", "doc": "Namespace PHPoole\\Generator"},{"type": "Namespace", "link": "PHPoole/Page.html", "name": "PHPoole\\Page", "doc": "Namespace PHPoole\\Page"},{"type": "Namespace", "link": "PHPoole/Renderer.html", "name": "PHPoole\\Renderer", "doc": "Namespace PHPoole\\Renderer"},{"type": "Namespace", "link": "PHPoole/Renderer/Twig.html", "name": "PHPoole\\Renderer\\Twig", "doc": "Namespace PHPoole\\Renderer\\Twig"},{"type": "Namespace", "link": "PHPoole/Step.html", "name": "PHPoole\\Step", "doc": "Namespace PHPoole\\Step"},
            {"type": "Interface", "fromName": "PHPoole\\Collection", "fromLink": "PHPoole/Collection.html", "link": "PHPoole/Collection/CollectionInterface.html", "name": "PHPoole\\Collection\\CollectionInterface", "doc": "&quot;Interface CollectionInterface.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_setId", "name": "PHPoole\\Collection\\CollectionInterface::setId", "doc": "&quot;Set the collection identifier.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_getId", "name": "PHPoole\\Collection\\CollectionInterface::getId", "doc": "&quot;Return the collection identifier.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_has", "name": "PHPoole\\Collection\\CollectionInterface::has", "doc": "&quot;Does the item exist?&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_add", "name": "PHPoole\\Collection\\CollectionInterface::add", "doc": "&quot;Add an item.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_replace", "name": "PHPoole\\Collection\\CollectionInterface::replace", "doc": "&quot;Replace an item if exists.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_remove", "name": "PHPoole\\Collection\\CollectionInterface::remove", "doc": "&quot;Remove an item if exists.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_get", "name": "PHPoole\\Collection\\CollectionInterface::get", "doc": "&quot;Retrieve an item.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_keys", "name": "PHPoole\\Collection\\CollectionInterface::keys", "doc": "&quot;Retrieve all the keys.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_count", "name": "PHPoole\\Collection\\CollectionInterface::count", "doc": "&quot;Implement Countable.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_toArray", "name": "PHPoole\\Collection\\CollectionInterface::toArray", "doc": "&quot;Return collection.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_getIterator", "name": "PHPoole\\Collection\\CollectionInterface::getIterator", "doc": "&quot;Implement \\IteratorAggregate.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_usort", "name": "PHPoole\\Collection\\CollectionInterface::usort", "doc": "&quot;Implements usort.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_filter", "name": "PHPoole\\Collection\\CollectionInterface::filter", "doc": "&quot;Filters items using a callback function.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_map", "name": "PHPoole\\Collection\\CollectionInterface::map", "doc": "&quot;Applies a callback to items.&quot;"},
            
            {"type": "Interface", "fromName": "PHPoole\\Collection", "fromLink": "PHPoole/Collection.html", "link": "PHPoole/Collection/ItemInterface.html", "name": "PHPoole\\Collection\\ItemInterface", "doc": "&quot;Interface ItemInterface.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Collection\\ItemInterface", "fromLink": "PHPoole/Collection/ItemInterface.html", "link": "PHPoole/Collection/ItemInterface.html#method_setId", "name": "PHPoole\\Collection\\ItemInterface::setId", "doc": "&quot;Set the item identifier.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\ItemInterface", "fromLink": "PHPoole/Collection/ItemInterface.html", "link": "PHPoole/Collection/ItemInterface.html#method_getId", "name": "PHPoole\\Collection\\ItemInterface::getId", "doc": "&quot;Return the item identifier.&quot;"},
            
            {"type": "Interface", "fromName": "PHPoole\\Converter", "fromLink": "PHPoole/Converter.html", "link": "PHPoole/Converter/ConverterInterface.html", "name": "PHPoole\\Converter\\ConverterInterface", "doc": "&quot;Interface ConverterInterface.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Converter\\ConverterInterface", "fromLink": "PHPoole/Converter/ConverterInterface.html", "link": "PHPoole/Converter/ConverterInterface.html#method_convertFrontmatter", "name": "PHPoole\\Converter\\ConverterInterface::convertFrontmatter", "doc": "&quot;Converts frontmatter.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Converter\\ConverterInterface", "fromLink": "PHPoole/Converter/ConverterInterface.html", "link": "PHPoole/Converter/ConverterInterface.html#method_convertBody", "name": "PHPoole\\Converter\\ConverterInterface::convertBody", "doc": "&quot;Converts body.&quot;"},
            
            {"type": "Interface", "fromName": "PHPoole\\Exception", "fromLink": "PHPoole/Exception.html", "link": "PHPoole/Exception/ExceptionInterface.html", "name": "PHPoole\\Exception\\ExceptionInterface", "doc": "&quot;&quot;"},
                    
            {"type": "Interface", "fromName": "PHPoole\\Generator", "fromLink": "PHPoole/Generator.html", "link": "PHPoole/Generator/GeneratorInterface.html", "name": "PHPoole\\Generator\\GeneratorInterface", "doc": "&quot;Interface GeneratorInterface.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Generator\\GeneratorInterface", "fromLink": "PHPoole/Generator/GeneratorInterface.html", "link": "PHPoole/Generator/GeneratorInterface.html#method___construct", "name": "PHPoole\\Generator\\GeneratorInterface::__construct", "doc": "&quot;Give config to object.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Generator\\GeneratorInterface", "fromLink": "PHPoole/Generator/GeneratorInterface.html", "link": "PHPoole/Generator/GeneratorInterface.html#method_generate", "name": "PHPoole\\Generator\\GeneratorInterface::generate", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "PHPoole\\Renderer", "fromLink": "PHPoole/Renderer.html", "link": "PHPoole/Renderer/RendererInterface.html", "name": "PHPoole\\Renderer\\RendererInterface", "doc": "&quot;Interface RendererInterface.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Renderer\\RendererInterface", "fromLink": "PHPoole/Renderer/RendererInterface.html", "link": "PHPoole/Renderer/RendererInterface.html#method___construct", "name": "PHPoole\\Renderer\\RendererInterface::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\RendererInterface", "fromLink": "PHPoole/Renderer/RendererInterface.html", "link": "PHPoole/Renderer/RendererInterface.html#method_addGlobal", "name": "PHPoole\\Renderer\\RendererInterface::addGlobal", "doc": "&quot;Add global variable.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\RendererInterface", "fromLink": "PHPoole/Renderer/RendererInterface.html", "link": "PHPoole/Renderer/RendererInterface.html#method_render", "name": "PHPoole\\Renderer\\RendererInterface::render", "doc": "&quot;Rendering.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\RendererInterface", "fromLink": "PHPoole/Renderer/RendererInterface.html", "link": "PHPoole/Renderer/RendererInterface.html#method_save", "name": "PHPoole\\Renderer\\RendererInterface::save", "doc": "&quot;Saves rendered template.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\RendererInterface", "fromLink": "PHPoole/Renderer/RendererInterface.html", "link": "PHPoole/Renderer/RendererInterface.html#method_isValid", "name": "PHPoole\\Renderer\\RendererInterface::isValid", "doc": "&quot;Validates template.&quot;"},
            
            {"type": "Interface", "fromName": "PHPoole\\Step", "fromLink": "PHPoole/Step.html", "link": "PHPoole/Step/StepInterface.html", "name": "PHPoole\\Step\\StepInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Step\\StepInterface", "fromLink": "PHPoole/Step/StepInterface.html", "link": "PHPoole/Step/StepInterface.html#method___construct", "name": "PHPoole\\Step\\StepInterface::__construct", "doc": "&quot;StepInterface constructor.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Step\\StepInterface", "fromLink": "PHPoole/Step/StepInterface.html", "link": "PHPoole/Step/StepInterface.html#method_init", "name": "PHPoole\\Step\\StepInterface::init", "doc": "&quot;Checks if step can be processed.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Step\\StepInterface", "fromLink": "PHPoole/Step/StepInterface.html", "link": "PHPoole/Step/StepInterface.html#method_process", "name": "PHPoole\\Step\\StepInterface::process", "doc": "&quot;Public call to process.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Step\\StepInterface", "fromLink": "PHPoole/Step/StepInterface.html", "link": "PHPoole/Step/StepInterface.html#method_internalProcess", "name": "PHPoole\\Step\\StepInterface::internalProcess", "doc": "&quot;Process implementation.&quot;"},
            
            
            {"type": "Class", "fromName": "PHPoole\\Collection", "fromLink": "PHPoole/Collection.html", "link": "PHPoole/Collection/Collection.html", "name": "PHPoole\\Collection\\Collection", "doc": "&quot;Class Collection.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Collection\\Collection", "fromLink": "PHPoole/Collection/Collection.html", "link": "PHPoole/Collection/Collection.html#method___construct", "name": "PHPoole\\Collection\\Collection::__construct", "doc": "&quot;AbstractCollection constructor.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Collection", "fromLink": "PHPoole/Collection/Collection.html", "link": "PHPoole/Collection/Collection.html#method_setId", "name": "PHPoole\\Collection\\Collection::setId", "doc": "&quot;If parameter is empty uses the object hash\n{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Collection", "fromLink": "PHPoole/Collection/Collection.html", "link": "PHPoole/Collection/Collection.html#method_getId", "name": "PHPoole\\Collection\\Collection::getId", "doc": "&quot;Return the collection identifier.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Collection", "fromLink": "PHPoole/Collection/Collection.html", "link": "PHPoole/Collection/Collection.html#method_has", "name": "PHPoole\\Collection\\Collection::has", "doc": "&quot;Does the item exist?&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Collection", "fromLink": "PHPoole/Collection/Collection.html", "link": "PHPoole/Collection/Collection.html#method_add", "name": "PHPoole\\Collection\\Collection::add", "doc": "&quot;Add an item.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Collection", "fromLink": "PHPoole/Collection/Collection.html", "link": "PHPoole/Collection/Collection.html#method_replace", "name": "PHPoole\\Collection\\Collection::replace", "doc": "&quot;Replace an item if exists.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Collection", "fromLink": "PHPoole/Collection/Collection.html", "link": "PHPoole/Collection/Collection.html#method_remove", "name": "PHPoole\\Collection\\Collection::remove", "doc": "&quot;Remove an item if exists.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Collection", "fromLink": "PHPoole/Collection/Collection.html", "link": "PHPoole/Collection/Collection.html#method_get", "name": "PHPoole\\Collection\\Collection::get", "doc": "&quot;Retrieve an item.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Collection", "fromLink": "PHPoole/Collection/Collection.html", "link": "PHPoole/Collection/Collection.html#method_keys", "name": "PHPoole\\Collection\\Collection::keys", "doc": "&quot;Retrieve all the keys.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Collection", "fromLink": "PHPoole/Collection/Collection.html", "link": "PHPoole/Collection/Collection.html#method_count", "name": "PHPoole\\Collection\\Collection::count", "doc": "&quot;Implement Countable.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Collection", "fromLink": "PHPoole/Collection/Collection.html", "link": "PHPoole/Collection/Collection.html#method_toArray", "name": "PHPoole\\Collection\\Collection::toArray", "doc": "&quot;Return collection.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Collection", "fromLink": "PHPoole/Collection/Collection.html", "link": "PHPoole/Collection/Collection.html#method_getIterator", "name": "PHPoole\\Collection\\Collection::getIterator", "doc": "&quot;Implement \\IteratorAggregate.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Collection", "fromLink": "PHPoole/Collection/Collection.html", "link": "PHPoole/Collection/Collection.html#method_usort", "name": "PHPoole\\Collection\\Collection::usort", "doc": "&quot;Implements usort.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Collection", "fromLink": "PHPoole/Collection/Collection.html", "link": "PHPoole/Collection/Collection.html#method_sortByDate", "name": "PHPoole\\Collection\\Collection::sortByDate", "doc": "&quot;Sort items by date.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Collection", "fromLink": "PHPoole/Collection/Collection.html", "link": "PHPoole/Collection/Collection.html#method_filter", "name": "PHPoole\\Collection\\Collection::filter", "doc": "&quot;Filters items using a callback function.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Collection", "fromLink": "PHPoole/Collection/Collection.html", "link": "PHPoole/Collection/Collection.html#method_map", "name": "PHPoole\\Collection\\Collection::map", "doc": "&quot;Applies a callback to items.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Collection", "fromLink": "PHPoole/Collection/Collection.html", "link": "PHPoole/Collection/Collection.html#method_offsetExists", "name": "PHPoole\\Collection\\Collection::offsetExists", "doc": "&quot;Implement ArrayAccess.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Collection", "fromLink": "PHPoole/Collection/Collection.html", "link": "PHPoole/Collection/Collection.html#method_offsetGet", "name": "PHPoole\\Collection\\Collection::offsetGet", "doc": "&quot;Implement ArrayAccess.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Collection", "fromLink": "PHPoole/Collection/Collection.html", "link": "PHPoole/Collection/Collection.html#method_offsetSet", "name": "PHPoole\\Collection\\Collection::offsetSet", "doc": "&quot;Implement ArrayAccess.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Collection", "fromLink": "PHPoole/Collection/Collection.html", "link": "PHPoole/Collection/Collection.html#method_offsetUnset", "name": "PHPoole\\Collection\\Collection::offsetUnset", "doc": "&quot;Implement ArrayAccess.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Collection", "fromLink": "PHPoole/Collection/Collection.html", "link": "PHPoole/Collection/Collection.html#method___toString", "name": "PHPoole\\Collection\\Collection::__toString", "doc": "&quot;Returns a string representation of this object.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Collection", "fromLink": "PHPoole/Collection.html", "link": "PHPoole/Collection/CollectionInterface.html", "name": "PHPoole\\Collection\\CollectionInterface", "doc": "&quot;Interface CollectionInterface.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_setId", "name": "PHPoole\\Collection\\CollectionInterface::setId", "doc": "&quot;Set the collection identifier.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_getId", "name": "PHPoole\\Collection\\CollectionInterface::getId", "doc": "&quot;Return the collection identifier.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_has", "name": "PHPoole\\Collection\\CollectionInterface::has", "doc": "&quot;Does the item exist?&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_add", "name": "PHPoole\\Collection\\CollectionInterface::add", "doc": "&quot;Add an item.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_replace", "name": "PHPoole\\Collection\\CollectionInterface::replace", "doc": "&quot;Replace an item if exists.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_remove", "name": "PHPoole\\Collection\\CollectionInterface::remove", "doc": "&quot;Remove an item if exists.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_get", "name": "PHPoole\\Collection\\CollectionInterface::get", "doc": "&quot;Retrieve an item.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_keys", "name": "PHPoole\\Collection\\CollectionInterface::keys", "doc": "&quot;Retrieve all the keys.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_count", "name": "PHPoole\\Collection\\CollectionInterface::count", "doc": "&quot;Implement Countable.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_toArray", "name": "PHPoole\\Collection\\CollectionInterface::toArray", "doc": "&quot;Return collection.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_getIterator", "name": "PHPoole\\Collection\\CollectionInterface::getIterator", "doc": "&quot;Implement \\IteratorAggregate.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_usort", "name": "PHPoole\\Collection\\CollectionInterface::usort", "doc": "&quot;Implements usort.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_filter", "name": "PHPoole\\Collection\\CollectionInterface::filter", "doc": "&quot;Filters items using a callback function.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\CollectionInterface", "fromLink": "PHPoole/Collection/CollectionInterface.html", "link": "PHPoole/Collection/CollectionInterface.html#method_map", "name": "PHPoole\\Collection\\CollectionInterface::map", "doc": "&quot;Applies a callback to items.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Collection", "fromLink": "PHPoole/Collection.html", "link": "PHPoole/Collection/Item.html", "name": "PHPoole\\Collection\\Item", "doc": "&quot;Class Item.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Collection\\Item", "fromLink": "PHPoole/Collection/Item.html", "link": "PHPoole/Collection/Item.html#method___construct", "name": "PHPoole\\Collection\\Item::__construct", "doc": "&quot;AbstractItem constructor.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Item", "fromLink": "PHPoole/Collection/Item.html", "link": "PHPoole/Collection/Item.html#method_setId", "name": "PHPoole\\Collection\\Item::setId", "doc": "&quot;If parameter is empty uses the object hash\n{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Item", "fromLink": "PHPoole/Collection/Item.html", "link": "PHPoole/Collection/Item.html#method_getId", "name": "PHPoole\\Collection\\Item::getId", "doc": "&quot;Return the item identifier.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Item", "fromLink": "PHPoole/Collection/Item.html", "link": "PHPoole/Collection/Item.html#method_offsetExists", "name": "PHPoole\\Collection\\Item::offsetExists", "doc": "&quot;Implement ArrayAccess.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Item", "fromLink": "PHPoole/Collection/Item.html", "link": "PHPoole/Collection/Item.html#method_offsetGet", "name": "PHPoole\\Collection\\Item::offsetGet", "doc": "&quot;Implement ArrayAccess.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Item", "fromLink": "PHPoole/Collection/Item.html", "link": "PHPoole/Collection/Item.html#method_offsetSet", "name": "PHPoole\\Collection\\Item::offsetSet", "doc": "&quot;Implement ArrayAccess.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Item", "fromLink": "PHPoole/Collection/Item.html", "link": "PHPoole/Collection/Item.html#method_offsetUnset", "name": "PHPoole\\Collection\\Item::offsetUnset", "doc": "&quot;Implement ArrayAccess.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Collection", "fromLink": "PHPoole/Collection.html", "link": "PHPoole/Collection/ItemInterface.html", "name": "PHPoole\\Collection\\ItemInterface", "doc": "&quot;Interface ItemInterface.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Collection\\ItemInterface", "fromLink": "PHPoole/Collection/ItemInterface.html", "link": "PHPoole/Collection/ItemInterface.html#method_setId", "name": "PHPoole\\Collection\\ItemInterface::setId", "doc": "&quot;Set the item identifier.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\ItemInterface", "fromLink": "PHPoole/Collection/ItemInterface.html", "link": "PHPoole/Collection/ItemInterface.html#method_getId", "name": "PHPoole\\Collection\\ItemInterface::getId", "doc": "&quot;Return the item identifier.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Collection\\Menu", "fromLink": "PHPoole/Collection/Menu.html", "link": "PHPoole/Collection/Menu/Collection.html", "name": "PHPoole\\Collection\\Menu\\Collection", "doc": "&quot;Class Collection.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Collection\\Menu\\Collection", "fromLink": "PHPoole/Collection/Menu/Collection.html", "link": "PHPoole/Collection/Menu/Collection.html#method_get", "name": "PHPoole\\Collection\\Menu\\Collection::get", "doc": "&quot;Return a Menu collection (creates it if not exists)\n{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Collection\\Menu", "fromLink": "PHPoole/Collection/Menu.html", "link": "PHPoole/Collection/Menu/Entry.html", "name": "PHPoole\\Collection\\Menu\\Entry", "doc": "&quot;Class Entry.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Collection\\Menu\\Entry", "fromLink": "PHPoole/Collection/Menu/Entry.html", "link": "PHPoole/Collection/Menu/Entry.html#method_setName", "name": "PHPoole\\Collection\\Menu\\Entry::setName", "doc": "&quot;Set menu entry name.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Menu\\Entry", "fromLink": "PHPoole/Collection/Menu/Entry.html", "link": "PHPoole/Collection/Menu/Entry.html#method_setUrl", "name": "PHPoole\\Collection\\Menu\\Entry::setUrl", "doc": "&quot;Set menu entry URL.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Menu\\Entry", "fromLink": "PHPoole/Collection/Menu/Entry.html", "link": "PHPoole/Collection/Menu/Entry.html#method_setWeight", "name": "PHPoole\\Collection\\Menu\\Entry::setWeight", "doc": "&quot;Set menu entry weight.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Collection\\Menu", "fromLink": "PHPoole/Collection/Menu.html", "link": "PHPoole/Collection/Menu/Menu.html", "name": "PHPoole\\Collection\\Menu\\Menu", "doc": "&quot;Class Menu.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Collection\\Menu\\Menu", "fromLink": "PHPoole/Collection/Menu/Menu.html", "link": "PHPoole/Collection/Menu/Menu.html#method_add", "name": "PHPoole\\Collection\\Menu\\Menu::add", "doc": "&quot;Add menu entry.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Collection\\Page", "fromLink": "PHPoole/Collection/Page.html", "link": "PHPoole/Collection/Page/Page.html", "name": "PHPoole\\Collection\\Page\\Page", "doc": "&quot;Class Page.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method___construct", "name": "PHPoole\\Collection\\Page\\Page::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_asPrefix", "name": "PHPoole\\Collection\\Page\\Page::asPrefix", "doc": "&quot;Return matches array if prefix exist or false.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_getPrefix", "name": "PHPoole\\Collection\\Page\\Page::getPrefix", "doc": "&quot;Return prefix if prefix or false.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_subPrefix", "name": "PHPoole\\Collection\\Page\\Page::subPrefix", "doc": "&quot;Return string without prefix (if exist).&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_urlize", "name": "PHPoole\\Collection\\Page\\Page::urlize", "doc": "&quot;Format string into URL.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_isVirtual", "name": "PHPoole\\Collection\\Page\\Page::isVirtual", "doc": "&quot;Is current page is virtual?&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_setNodeType", "name": "PHPoole\\Collection\\Page\\Page::setNodeType", "doc": "&quot;Set node type.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_getNodeType", "name": "PHPoole\\Collection\\Page\\Page::getNodeType", "doc": "&quot;Get node type.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_parse", "name": "PHPoole\\Collection\\Page\\Page::parse", "doc": "&quot;Parse file content.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_setName", "name": "PHPoole\\Collection\\Page\\Page::setName", "doc": "&quot;Set name.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_getName", "name": "PHPoole\\Collection\\Page\\Page::getName", "doc": "&quot;Get name.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_setPath", "name": "PHPoole\\Collection\\Page\\Page::setPath", "doc": "&quot;Set path.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_getPath", "name": "PHPoole\\Collection\\Page\\Page::getPath", "doc": "&quot;Get path.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_setPathname", "name": "PHPoole\\Collection\\Page\\Page::setPathname", "doc": "&quot;Set path name.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_getPathname", "name": "PHPoole\\Collection\\Page\\Page::getPathname", "doc": "&quot;Get path name.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_setSection", "name": "PHPoole\\Collection\\Page\\Page::setSection", "doc": "&quot;Set section.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_getSection", "name": "PHPoole\\Collection\\Page\\Page::getSection", "doc": "&quot;Get section.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_setTitle", "name": "PHPoole\\Collection\\Page\\Page::setTitle", "doc": "&quot;Set title.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_getTitle", "name": "PHPoole\\Collection\\Page\\Page::getTitle", "doc": "&quot;Get title.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_setDate", "name": "PHPoole\\Collection\\Page\\Page::setDate", "doc": "&quot;Set date.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_getDate", "name": "PHPoole\\Collection\\Page\\Page::getDate", "doc": "&quot;Get Date.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_setPermalink", "name": "PHPoole\\Collection\\Page\\Page::setPermalink", "doc": "&quot;Set permalink.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_getPermalink", "name": "PHPoole\\Collection\\Page\\Page::getPermalink", "doc": "&quot;Get permalink.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_getFrontmatter", "name": "PHPoole\\Collection\\Page\\Page::getFrontmatter", "doc": "&quot;Get frontmatter.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_getBody", "name": "PHPoole\\Collection\\Page\\Page::getBody", "doc": "&quot;Get body.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_setHtml", "name": "PHPoole\\Collection\\Page\\Page::setHtml", "doc": "&quot;Set HTML.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_getContent", "name": "PHPoole\\Collection\\Page\\Page::getContent", "doc": "&quot;Get HTML alias.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_setLayout", "name": "PHPoole\\Collection\\Page\\Page::setLayout", "doc": "&quot;Set layout.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Collection\\Page\\Page", "fromLink": "PHPoole/Collection/Page/Page.html", "link": "PHPoole/Collection/Page/Page.html#method_getLayout", "name": "PHPoole\\Collection\\Page\\Page::getLayout", "doc": "&quot;Get layout.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Collection\\Taxonomy", "fromLink": "PHPoole/Collection/Taxonomy.html", "link": "PHPoole/Collection/Taxonomy/Collection.html", "name": "PHPoole\\Collection\\Taxonomy\\Collection", "doc": "&quot;Class Collection.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Collection\\Taxonomy\\Collection", "fromLink": "PHPoole/Collection/Taxonomy/Collection.html", "link": "PHPoole/Collection/Taxonomy/Collection.html#method_get", "name": "PHPoole\\Collection\\Taxonomy\\Collection::get", "doc": "&quot;Return a Vocabulary collection (creates it if not exists)\n{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Collection\\Taxonomy", "fromLink": "PHPoole/Collection/Taxonomy.html", "link": "PHPoole/Collection/Taxonomy/Term.html", "name": "PHPoole\\Collection\\Taxonomy\\Term", "doc": "&quot;Class Term.&quot;"},
                    
            {"type": "Class", "fromName": "PHPoole\\Collection\\Taxonomy", "fromLink": "PHPoole/Collection/Taxonomy.html", "link": "PHPoole/Collection/Taxonomy/Vocabulary.html", "name": "PHPoole\\Collection\\Taxonomy\\Vocabulary", "doc": "&quot;Class Vocabulary.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Collection\\Taxonomy\\Vocabulary", "fromLink": "PHPoole/Collection/Taxonomy/Vocabulary.html", "link": "PHPoole/Collection/Taxonomy/Vocabulary.html#method_add", "name": "PHPoole\\Collection\\Taxonomy\\Vocabulary::add", "doc": "&quot;Adds term to a Vocabulary collection.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole", "fromLink": "PHPoole.html", "link": "PHPoole/Config.html", "name": "PHPoole\\Config", "doc": "&quot;Class Config.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Config", "fromLink": "PHPoole/Config.html", "link": "PHPoole/Config.html#method___construct", "name": "PHPoole\\Config::__construct", "doc": "&quot;Config constructor.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Config", "fromLink": "PHPoole/Config.html", "link": "PHPoole/Config.html#method_getAll", "name": "PHPoole\\Config::getAll", "doc": "&quot;Get config data.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Config", "fromLink": "PHPoole/Config.html", "link": "PHPoole/Config.html#method_getAllAsArray", "name": "PHPoole\\Config::getAllAsArray", "doc": "&quot;Get data as array.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Config", "fromLink": "PHPoole/Config.html", "link": "PHPoole/Config.html#method_get", "name": "PHPoole\\Config::get", "doc": "&quot;Return a config value.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Config", "fromLink": "PHPoole/Config.html", "link": "PHPoole/Config.html#method_setSourceDir", "name": "PHPoole\\Config::setSourceDir", "doc": "&quot;Set source directory.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Config", "fromLink": "PHPoole/Config.html", "link": "PHPoole/Config.html#method_getSourceDir", "name": "PHPoole\\Config::getSourceDir", "doc": "&quot;Get source directory.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Config", "fromLink": "PHPoole/Config.html", "link": "PHPoole/Config.html#method_setDestinationDir", "name": "PHPoole\\Config::setDestinationDir", "doc": "&quot;Set destination directory.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Config", "fromLink": "PHPoole/Config.html", "link": "PHPoole/Config.html#method_getDestinationDir", "name": "PHPoole\\Config::getDestinationDir", "doc": "&quot;Get destination directory.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Config", "fromLink": "PHPoole/Config.html", "link": "PHPoole/Config.html#method_hasTheme", "name": "PHPoole\\Config::hasTheme", "doc": "&quot;Is config has a valid theme?&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Config", "fromLink": "PHPoole/Config.html", "link": "PHPoole/Config.html#method_getContentPath", "name": "PHPoole\\Config::getContentPath", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Config", "fromLink": "PHPoole/Config.html", "link": "PHPoole/Config.html#method_getLayoutsPath", "name": "PHPoole\\Config::getLayoutsPath", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Config", "fromLink": "PHPoole/Config.html", "link": "PHPoole/Config.html#method_getThemesPath", "name": "PHPoole\\Config::getThemesPath", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Config", "fromLink": "PHPoole/Config.html", "link": "PHPoole/Config.html#method_getThemePath", "name": "PHPoole\\Config::getThemePath", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Config", "fromLink": "PHPoole/Config.html", "link": "PHPoole/Config.html#method_getOutputPath", "name": "PHPoole\\Config::getOutputPath", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Config", "fromLink": "PHPoole/Config.html", "link": "PHPoole/Config.html#method_getStaticPath", "name": "PHPoole\\Config::getStaticPath", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Converter", "fromLink": "PHPoole/Converter.html", "link": "PHPoole/Converter/Converter.html", "name": "PHPoole\\Converter\\Converter", "doc": "&quot;Class Converter.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Converter\\Converter", "fromLink": "PHPoole/Converter/Converter.html", "link": "PHPoole/Converter/Converter.html#method_convertFrontmatter", "name": "PHPoole\\Converter\\Converter::convertFrontmatter", "doc": "&quot;Converts frontmatter.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Converter\\Converter", "fromLink": "PHPoole/Converter/Converter.html", "link": "PHPoole/Converter/Converter.html#method_convertBody", "name": "PHPoole\\Converter\\Converter::convertBody", "doc": "&quot;Converts body.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Converter", "fromLink": "PHPoole/Converter.html", "link": "PHPoole/Converter/ConverterInterface.html", "name": "PHPoole\\Converter\\ConverterInterface", "doc": "&quot;Interface ConverterInterface.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Converter\\ConverterInterface", "fromLink": "PHPoole/Converter/ConverterInterface.html", "link": "PHPoole/Converter/ConverterInterface.html#method_convertFrontmatter", "name": "PHPoole\\Converter\\ConverterInterface::convertFrontmatter", "doc": "&quot;Converts frontmatter.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Converter\\ConverterInterface", "fromLink": "PHPoole/Converter/ConverterInterface.html", "link": "PHPoole/Converter/ConverterInterface.html#method_convertBody", "name": "PHPoole\\Converter\\ConverterInterface::convertBody", "doc": "&quot;Converts body.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Exception", "fromLink": "PHPoole/Exception.html", "link": "PHPoole/Exception/Exception.html", "name": "PHPoole\\Exception\\Exception", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "PHPoole\\Exception", "fromLink": "PHPoole/Exception.html", "link": "PHPoole/Exception/ExceptionInterface.html", "name": "PHPoole\\Exception\\ExceptionInterface", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "PHPoole\\Generator", "fromLink": "PHPoole/Generator.html", "link": "PHPoole/Generator/AbstractGenerator.html", "name": "PHPoole\\Generator\\AbstractGenerator", "doc": "&quot;Abstract class AbstractGenerator.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Generator\\AbstractGenerator", "fromLink": "PHPoole/Generator/AbstractGenerator.html", "link": "PHPoole/Generator/AbstractGenerator.html#method___construct", "name": "PHPoole\\Generator\\AbstractGenerator::__construct", "doc": "&quot;Give config to object.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Generator", "fromLink": "PHPoole/Generator.html", "link": "PHPoole/Generator/Alias.html", "name": "PHPoole\\Generator\\Alias", "doc": "&quot;Class Alias.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Generator\\Alias", "fromLink": "PHPoole/Generator/Alias.html", "link": "PHPoole/Generator/Alias.html#method_generate", "name": "PHPoole\\Generator\\Alias::generate", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Generator", "fromLink": "PHPoole/Generator.html", "link": "PHPoole/Generator/ExternalBody.html", "name": "PHPoole\\Generator\\ExternalBody", "doc": "&quot;Class Homepage.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Generator\\ExternalBody", "fromLink": "PHPoole/Generator/ExternalBody.html", "link": "PHPoole/Generator/ExternalBody.html#method_generate", "name": "PHPoole\\Generator\\ExternalBody::generate", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Generator", "fromLink": "PHPoole/Generator.html", "link": "PHPoole/Generator/GeneratorInterface.html", "name": "PHPoole\\Generator\\GeneratorInterface", "doc": "&quot;Interface GeneratorInterface.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Generator\\GeneratorInterface", "fromLink": "PHPoole/Generator/GeneratorInterface.html", "link": "PHPoole/Generator/GeneratorInterface.html#method___construct", "name": "PHPoole\\Generator\\GeneratorInterface::__construct", "doc": "&quot;Give config to object.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Generator\\GeneratorInterface", "fromLink": "PHPoole/Generator/GeneratorInterface.html", "link": "PHPoole/Generator/GeneratorInterface.html#method_generate", "name": "PHPoole\\Generator\\GeneratorInterface::generate", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Generator", "fromLink": "PHPoole/Generator.html", "link": "PHPoole/Generator/GeneratorManager.html", "name": "PHPoole\\Generator\\GeneratorManager", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Generator\\GeneratorManager", "fromLink": "PHPoole/Generator/GeneratorManager.html", "link": "PHPoole/Generator/GeneratorManager.html#method_addGenerator", "name": "PHPoole\\Generator\\GeneratorManager::addGenerator", "doc": "&quot;Adds a generator.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Generator\\GeneratorManager", "fromLink": "PHPoole/Generator/GeneratorManager.html", "link": "PHPoole/Generator/GeneratorManager.html#method_compare", "name": "PHPoole\\Generator\\GeneratorManager::compare", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Generator\\GeneratorManager", "fromLink": "PHPoole/Generator/GeneratorManager.html", "link": "PHPoole/Generator/GeneratorManager.html#method_process", "name": "PHPoole\\Generator\\GeneratorManager::process", "doc": "&quot;Process each generators.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Generator", "fromLink": "PHPoole/Generator.html", "link": "PHPoole/Generator/Homepage.html", "name": "PHPoole\\Generator\\Homepage", "doc": "&quot;Class Homepage.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Generator\\Homepage", "fromLink": "PHPoole/Generator/Homepage.html", "link": "PHPoole/Generator/Homepage.html#method_generate", "name": "PHPoole\\Generator\\Homepage::generate", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Generator", "fromLink": "PHPoole/Generator.html", "link": "PHPoole/Generator/PagesFromConfig.html", "name": "PHPoole\\Generator\\PagesFromConfig", "doc": "&quot;Class PagesFromConfig.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Generator\\PagesFromConfig", "fromLink": "PHPoole/Generator/PagesFromConfig.html", "link": "PHPoole/Generator/PagesFromConfig.html#method_generate", "name": "PHPoole\\Generator\\PagesFromConfig::generate", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Generator", "fromLink": "PHPoole/Generator.html", "link": "PHPoole/Generator/Pagination.html", "name": "PHPoole\\Generator\\Pagination", "doc": "&quot;Class Pagination.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Generator\\Pagination", "fromLink": "PHPoole/Generator/Pagination.html", "link": "PHPoole/Generator/Pagination.html#method_generate", "name": "PHPoole\\Generator\\Pagination::generate", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Generator", "fromLink": "PHPoole/Generator.html", "link": "PHPoole/Generator/Section.html", "name": "PHPoole\\Generator\\Section", "doc": "&quot;Class Section.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Generator\\Section", "fromLink": "PHPoole/Generator/Section.html", "link": "PHPoole/Generator/Section.html#method_generate", "name": "PHPoole\\Generator\\Section::generate", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Generator", "fromLink": "PHPoole/Generator.html", "link": "PHPoole/Generator/Taxonomy.html", "name": "PHPoole\\Generator\\Taxonomy", "doc": "&quot;Class Taxonomy.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Generator\\Taxonomy", "fromLink": "PHPoole/Generator/Taxonomy.html", "link": "PHPoole/Generator/Taxonomy.html#method_generate", "name": "PHPoole\\Generator\\Taxonomy::generate", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Generator", "fromLink": "PHPoole/Generator.html", "link": "PHPoole/Generator/TitleReplace.html", "name": "PHPoole\\Generator\\TitleReplace", "doc": "&quot;Class TitleReplace.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Generator\\TitleReplace", "fromLink": "PHPoole/Generator/TitleReplace.html", "link": "PHPoole/Generator/TitleReplace.html#method_generate", "name": "PHPoole\\Generator\\TitleReplace::generate", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "PHPoole", "fromLink": "PHPoole.html", "link": "PHPoole/PHPoole.html", "name": "PHPoole\\PHPoole", "doc": "&quot;Class PHPoole.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\PHPoole", "fromLink": "PHPoole/PHPoole.html", "link": "PHPoole/PHPoole.html#method___construct", "name": "PHPoole\\PHPoole::__construct", "doc": "&quot;PHPoole constructor.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\PHPoole", "fromLink": "PHPoole/PHPoole.html", "link": "PHPoole/PHPoole.html#method_create", "name": "PHPoole\\PHPoole::create", "doc": "&quot;Creates a new PHPoole instance.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\PHPoole", "fromLink": "PHPoole/PHPoole.html", "link": "PHPoole/PHPoole.html#method_setConfig", "name": "PHPoole\\PHPoole::setConfig", "doc": "&quot;Set config.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\PHPoole", "fromLink": "PHPoole/PHPoole.html", "link": "PHPoole/PHPoole.html#method_getConfig", "name": "PHPoole\\PHPoole::getConfig", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\PHPoole", "fromLink": "PHPoole/PHPoole.html", "link": "PHPoole/PHPoole.html#method_setSourceDir", "name": "PHPoole\\PHPoole::setSourceDir", "doc": "&quot;Config::setSourceDir alias.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\PHPoole", "fromLink": "PHPoole/PHPoole.html", "link": "PHPoole/PHPoole.html#method_setDestinationDir", "name": "PHPoole\\PHPoole::setDestinationDir", "doc": "&quot;Config::setDestinationDir alias.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\PHPoole", "fromLink": "PHPoole/PHPoole.html", "link": "PHPoole/PHPoole.html#method_setContent", "name": "PHPoole\\PHPoole::setContent", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\PHPoole", "fromLink": "PHPoole/PHPoole.html", "link": "PHPoole/PHPoole.html#method_getContent", "name": "PHPoole\\PHPoole::getContent", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\PHPoole", "fromLink": "PHPoole/PHPoole.html", "link": "PHPoole/PHPoole.html#method_setPages", "name": "PHPoole\\PHPoole::setPages", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\PHPoole", "fromLink": "PHPoole/PHPoole.html", "link": "PHPoole/PHPoole.html#method_getPages", "name": "PHPoole\\PHPoole::getPages", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\PHPoole", "fromLink": "PHPoole/PHPoole.html", "link": "PHPoole/PHPoole.html#method_setMenus", "name": "PHPoole\\PHPoole::setMenus", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\PHPoole", "fromLink": "PHPoole/PHPoole.html", "link": "PHPoole/PHPoole.html#method_getMenus", "name": "PHPoole\\PHPoole::getMenus", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\PHPoole", "fromLink": "PHPoole/PHPoole.html", "link": "PHPoole/PHPoole.html#method_setMessageCallback", "name": "PHPoole\\PHPoole::setMessageCallback", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\PHPoole", "fromLink": "PHPoole/PHPoole.html", "link": "PHPoole/PHPoole.html#method_getMessageCb", "name": "PHPoole\\PHPoole::getMessageCb", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\PHPoole", "fromLink": "PHPoole/PHPoole.html", "link": "PHPoole/PHPoole.html#method_setRenderer", "name": "PHPoole\\PHPoole::setRenderer", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\PHPoole", "fromLink": "PHPoole/PHPoole.html", "link": "PHPoole/PHPoole.html#method_getRenderer", "name": "PHPoole\\PHPoole::getRenderer", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\PHPoole", "fromLink": "PHPoole/PHPoole.html", "link": "PHPoole/PHPoole.html#method_addLog", "name": "PHPoole\\PHPoole::addLog", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\PHPoole", "fromLink": "PHPoole/PHPoole.html", "link": "PHPoole/PHPoole.html#method_getLog", "name": "PHPoole\\PHPoole::getLog", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\PHPoole", "fromLink": "PHPoole/PHPoole.html", "link": "PHPoole/PHPoole.html#method_showLog", "name": "PHPoole\\PHPoole::showLog", "doc": "&quot;Display $log string.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\PHPoole", "fromLink": "PHPoole/PHPoole.html", "link": "PHPoole/PHPoole.html#method_build", "name": "PHPoole\\PHPoole::build", "doc": "&quot;Builds a new website.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\PHPoole", "fromLink": "PHPoole/PHPoole.html", "link": "PHPoole/PHPoole.html#method_getVersion", "name": "PHPoole\\PHPoole::getVersion", "doc": "&quot;Return version.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Page", "fromLink": "PHPoole/Page.html", "link": "PHPoole/Page/NodeType.html", "name": "PHPoole\\Page\\NodeType", "doc": "&quot;Class NodeType.&quot;"},
                    
            {"type": "Class", "fromName": "PHPoole\\Page", "fromLink": "PHPoole/Page.html", "link": "PHPoole/Page/Parser.html", "name": "PHPoole\\Page\\Parser", "doc": "&quot;Class Parser.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Page\\Parser", "fromLink": "PHPoole/Page/Parser.html", "link": "PHPoole/Page/Parser.html#method___construct", "name": "PHPoole\\Page\\Parser::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Page\\Parser", "fromLink": "PHPoole/Page/Parser.html", "link": "PHPoole/Page/Parser.html#method_parse", "name": "PHPoole\\Page\\Parser::parse", "doc": "&quot;Parse the contents of the file.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Page\\Parser", "fromLink": "PHPoole/Page/Parser.html", "link": "PHPoole/Page/Parser.html#method_getFrontmatter", "name": "PHPoole\\Page\\Parser::getFrontmatter", "doc": "&quot;Get frontmatter.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Page\\Parser", "fromLink": "PHPoole/Page/Parser.html", "link": "PHPoole/Page/Parser.html#method_getBody", "name": "PHPoole\\Page\\Parser::getBody", "doc": "&quot;Get body.&quot;"},
            
            {"type": "Trait", "fromName": "PHPoole\\Page", "fromLink": "PHPoole/Page.html", "link": "PHPoole/Page/VariableTrait.html", "name": "PHPoole\\Page\\VariableTrait", "doc": "&quot;Helper to set and get page variables.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Page\\VariableTrait", "fromLink": "PHPoole/Page/VariableTrait.html", "link": "PHPoole/Page/VariableTrait.html#method_offsetExists", "name": "PHPoole\\Page\\VariableTrait::offsetExists", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Page\\VariableTrait", "fromLink": "PHPoole/Page/VariableTrait.html", "link": "PHPoole/Page/VariableTrait.html#method_offsetGet", "name": "PHPoole\\Page\\VariableTrait::offsetGet", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Page\\VariableTrait", "fromLink": "PHPoole/Page/VariableTrait.html", "link": "PHPoole/Page/VariableTrait.html#method_offsetSet", "name": "PHPoole\\Page\\VariableTrait::offsetSet", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Page\\VariableTrait", "fromLink": "PHPoole/Page/VariableTrait.html", "link": "PHPoole/Page/VariableTrait.html#method_offsetUnset", "name": "PHPoole\\Page\\VariableTrait::offsetUnset", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Page\\VariableTrait", "fromLink": "PHPoole/Page/VariableTrait.html", "link": "PHPoole/Page/VariableTrait.html#method_setVariables", "name": "PHPoole\\Page\\VariableTrait::setVariables", "doc": "&quot;Set variables.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Page\\VariableTrait", "fromLink": "PHPoole/Page/VariableTrait.html", "link": "PHPoole/Page/VariableTrait.html#method_getVariables", "name": "PHPoole\\Page\\VariableTrait::getVariables", "doc": "&quot;Get variables.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Page\\VariableTrait", "fromLink": "PHPoole/Page/VariableTrait.html", "link": "PHPoole/Page/VariableTrait.html#method_setVariable", "name": "PHPoole\\Page\\VariableTrait::setVariable", "doc": "&quot;Set a variable.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Page\\VariableTrait", "fromLink": "PHPoole/Page/VariableTrait.html", "link": "PHPoole/Page/VariableTrait.html#method_hasVariable", "name": "PHPoole\\Page\\VariableTrait::hasVariable", "doc": "&quot;Is variable exist?&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Page\\VariableTrait", "fromLink": "PHPoole/Page/VariableTrait.html", "link": "PHPoole/Page/VariableTrait.html#method_getVariable", "name": "PHPoole\\Page\\VariableTrait::getVariable", "doc": "&quot;Get a variable.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Page\\VariableTrait", "fromLink": "PHPoole/Page/VariableTrait.html", "link": "PHPoole/Page/VariableTrait.html#method_unVariable", "name": "PHPoole\\Page\\VariableTrait::unVariable", "doc": "&quot;Unset a variable.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Renderer", "fromLink": "PHPoole/Renderer.html", "link": "PHPoole/Renderer/Layout.html", "name": "PHPoole\\Renderer\\Layout", "doc": "&quot;Class Layout.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Renderer\\Layout", "fromLink": "PHPoole/Renderer/Layout.html", "link": "PHPoole/Renderer/Layout.html#method_finder", "name": "PHPoole\\Renderer\\Layout::finder", "doc": "&quot;Layout file finder.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Renderer", "fromLink": "PHPoole/Renderer.html", "link": "PHPoole/Renderer/RendererInterface.html", "name": "PHPoole\\Renderer\\RendererInterface", "doc": "&quot;Interface RendererInterface.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Renderer\\RendererInterface", "fromLink": "PHPoole/Renderer/RendererInterface.html", "link": "PHPoole/Renderer/RendererInterface.html#method___construct", "name": "PHPoole\\Renderer\\RendererInterface::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\RendererInterface", "fromLink": "PHPoole/Renderer/RendererInterface.html", "link": "PHPoole/Renderer/RendererInterface.html#method_addGlobal", "name": "PHPoole\\Renderer\\RendererInterface::addGlobal", "doc": "&quot;Add global variable.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\RendererInterface", "fromLink": "PHPoole/Renderer/RendererInterface.html", "link": "PHPoole/Renderer/RendererInterface.html#method_render", "name": "PHPoole\\Renderer\\RendererInterface::render", "doc": "&quot;Rendering.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\RendererInterface", "fromLink": "PHPoole/Renderer/RendererInterface.html", "link": "PHPoole/Renderer/RendererInterface.html#method_save", "name": "PHPoole\\Renderer\\RendererInterface::save", "doc": "&quot;Saves rendered template.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\RendererInterface", "fromLink": "PHPoole/Renderer/RendererInterface.html", "link": "PHPoole/Renderer/RendererInterface.html#method_isValid", "name": "PHPoole\\Renderer\\RendererInterface::isValid", "doc": "&quot;Validates template.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Renderer", "fromLink": "PHPoole/Renderer.html", "link": "PHPoole/Renderer/Twig.html", "name": "PHPoole\\Renderer\\Twig", "doc": "&quot;Class Twig.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Renderer\\Twig", "fromLink": "PHPoole/Renderer/Twig.html", "link": "PHPoole/Renderer/Twig.html#method___construct", "name": "PHPoole\\Renderer\\Twig::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\Twig", "fromLink": "PHPoole/Renderer/Twig.html", "link": "PHPoole/Renderer/Twig.html#method_addGlobal", "name": "PHPoole\\Renderer\\Twig::addGlobal", "doc": "&quot;Add global variable.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\Twig", "fromLink": "PHPoole/Renderer/Twig.html", "link": "PHPoole/Renderer/Twig.html#method_render", "name": "PHPoole\\Renderer\\Twig::render", "doc": "&quot;Rendering.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\Twig", "fromLink": "PHPoole/Renderer/Twig.html", "link": "PHPoole/Renderer/Twig.html#method_save", "name": "PHPoole\\Renderer\\Twig::save", "doc": "&quot;Saves rendered template.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\Twig", "fromLink": "PHPoole/Renderer/Twig.html", "link": "PHPoole/Renderer/Twig.html#method_isValid", "name": "PHPoole\\Renderer\\Twig::isValid", "doc": "&quot;Validates template.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Renderer\\Twig", "fromLink": "PHPoole/Renderer/Twig.html", "link": "PHPoole/Renderer/Twig/Extension.html", "name": "PHPoole\\Renderer\\Twig\\Extension", "doc": "&quot;Class Twig\\Extension.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Renderer\\Twig\\Extension", "fromLink": "PHPoole/Renderer/Twig/Extension.html", "link": "PHPoole/Renderer/Twig/Extension.html#method___construct", "name": "PHPoole\\Renderer\\Twig\\Extension::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\Twig\\Extension", "fromLink": "PHPoole/Renderer/Twig/Extension.html", "link": "PHPoole/Renderer/Twig/Extension.html#method_getName", "name": "PHPoole\\Renderer\\Twig\\Extension::getName", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\Twig\\Extension", "fromLink": "PHPoole/Renderer/Twig/Extension.html", "link": "PHPoole/Renderer/Twig/Extension.html#method_getFilters", "name": "PHPoole\\Renderer\\Twig\\Extension::getFilters", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\Twig\\Extension", "fromLink": "PHPoole/Renderer/Twig/Extension.html", "link": "PHPoole/Renderer/Twig/Extension.html#method_getFunctions", "name": "PHPoole\\Renderer\\Twig\\Extension::getFunctions", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\Twig\\Extension", "fromLink": "PHPoole/Renderer/Twig/Extension.html", "link": "PHPoole/Renderer/Twig/Extension.html#method_filterBySection", "name": "PHPoole\\Renderer\\Twig\\Extension::filterBySection", "doc": "&quot;Filter by section.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\Twig\\Extension", "fromLink": "PHPoole/Renderer/Twig/Extension.html", "link": "PHPoole/Renderer/Twig/Extension.html#method_filterBy", "name": "PHPoole\\Renderer\\Twig\\Extension::filterBy", "doc": "&quot;Filter by variable.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\Twig\\Extension", "fromLink": "PHPoole/Renderer/Twig/Extension.html", "link": "PHPoole/Renderer/Twig/Extension.html#method_sortByTitle", "name": "PHPoole\\Renderer\\Twig\\Extension::sortByTitle", "doc": "&quot;Sort by title.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\Twig\\Extension", "fromLink": "PHPoole/Renderer/Twig/Extension.html", "link": "PHPoole/Renderer/Twig/Extension.html#method_sortByWeight", "name": "PHPoole\\Renderer\\Twig\\Extension::sortByWeight", "doc": "&quot;Sort by weight.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\Twig\\Extension", "fromLink": "PHPoole/Renderer/Twig/Extension.html", "link": "PHPoole/Renderer/Twig/Extension.html#method_sortByDate", "name": "PHPoole\\Renderer\\Twig\\Extension::sortByDate", "doc": "&quot;Sort by date.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\Twig\\Extension", "fromLink": "PHPoole/Renderer/Twig/Extension.html", "link": "PHPoole/Renderer/Twig/Extension.html#method_createUrl", "name": "PHPoole\\Renderer\\Twig\\Extension::createUrl", "doc": "&quot;Create an URL.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\Twig\\Extension", "fromLink": "PHPoole/Renderer/Twig/Extension.html", "link": "PHPoole/Renderer/Twig/Extension.html#method_minify", "name": "PHPoole\\Renderer\\Twig\\Extension::minify", "doc": "&quot;Minify a CSS or a JS file.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\Twig\\Extension", "fromLink": "PHPoole/Renderer/Twig/Extension.html", "link": "PHPoole/Renderer/Twig/Extension.html#method_minifyCss", "name": "PHPoole\\Renderer\\Twig\\Extension::minifyCss", "doc": "&quot;Minify CSS.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\Twig\\Extension", "fromLink": "PHPoole/Renderer/Twig/Extension.html", "link": "PHPoole/Renderer/Twig/Extension.html#method_minifyJs", "name": "PHPoole\\Renderer\\Twig\\Extension::minifyJs", "doc": "&quot;Minify JS.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\Twig\\Extension", "fromLink": "PHPoole/Renderer/Twig/Extension.html", "link": "PHPoole/Renderer/Twig/Extension.html#method_excerpt", "name": "PHPoole\\Renderer\\Twig\\Extension::excerpt", "doc": "&quot;Read $lenght first characters of a string and add a suffix.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\Twig\\Extension", "fromLink": "PHPoole/Renderer/Twig/Extension.html", "link": "PHPoole/Renderer/Twig/Extension.html#method_excerptHtml", "name": "PHPoole\\Renderer\\Twig\\Extension::excerptHtml", "doc": "&quot;Read characters before &#039;&lt;!-- excerpt --&gt;&#039;.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Renderer\\Twig\\Extension", "fromLink": "PHPoole/Renderer/Twig/Extension.html", "link": "PHPoole/Renderer/Twig/Extension.html#method_readtime", "name": "PHPoole\\Renderer\\Twig\\Extension::readtime", "doc": "&quot;Calculate estimated time to read a text.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Step", "fromLink": "PHPoole/Step.html", "link": "PHPoole/Step/AbstractStep.html", "name": "PHPoole\\Step\\AbstractStep", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Step\\AbstractStep", "fromLink": "PHPoole/Step/AbstractStep.html", "link": "PHPoole/Step/AbstractStep.html#method___construct", "name": "PHPoole\\Step\\AbstractStep::__construct", "doc": "&quot;StepInterface constructor.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Step\\AbstractStep", "fromLink": "PHPoole/Step/AbstractStep.html", "link": "PHPoole/Step/AbstractStep.html#method_init", "name": "PHPoole\\Step\\AbstractStep::init", "doc": "&quot;Checks if step can be processed.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Step\\AbstractStep", "fromLink": "PHPoole/Step/AbstractStep.html", "link": "PHPoole/Step/AbstractStep.html#method_process", "name": "PHPoole\\Step\\AbstractStep::process", "doc": "&quot;Public call to process.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Step\\AbstractStep", "fromLink": "PHPoole/Step/AbstractStep.html", "link": "PHPoole/Step/AbstractStep.html#method_internalProcess", "name": "PHPoole\\Step\\AbstractStep::internalProcess", "doc": "&quot;Process implementation.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Step", "fromLink": "PHPoole/Step.html", "link": "PHPoole/Step/ConvertPages.html", "name": "PHPoole\\Step\\ConvertPages", "doc": "&quot;Converts content of all pages.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Step\\ConvertPages", "fromLink": "PHPoole/Step/ConvertPages.html", "link": "PHPoole/Step/ConvertPages.html#method_internalProcess", "name": "PHPoole\\Step\\ConvertPages::internalProcess", "doc": "&quot;Process implementation.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Step\\ConvertPages", "fromLink": "PHPoole/Step/ConvertPages.html", "link": "PHPoole/Step/ConvertPages.html#method_convertPage", "name": "PHPoole\\Step\\ConvertPages::convertPage", "doc": "&quot;Converts page content:\n- Yaml frontmatter to PHP array\n- Markdown body to HTML.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Step", "fromLink": "PHPoole/Step.html", "link": "PHPoole/Step/CopyStatic.html", "name": "PHPoole\\Step\\CopyStatic", "doc": "&quot;Copy static directory content to site root.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Step\\CopyStatic", "fromLink": "PHPoole/Step/CopyStatic.html", "link": "PHPoole/Step/CopyStatic.html#method_internalProcess", "name": "PHPoole\\Step\\CopyStatic::internalProcess", "doc": "&quot;Process implementation.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Step", "fromLink": "PHPoole/Step.html", "link": "PHPoole/Step/CreatePages.html", "name": "PHPoole\\Step\\CreatePages", "doc": "&quot;Create Pages collection from content iterator.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Step\\CreatePages", "fromLink": "PHPoole/Step/CreatePages.html", "link": "PHPoole/Step/CreatePages.html#method_internalProcess", "name": "PHPoole\\Step\\CreatePages::internalProcess", "doc": "&quot;Process implementation.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Step", "fromLink": "PHPoole/Step.html", "link": "PHPoole/Step/GenerateMenus.html", "name": "PHPoole\\Step\\GenerateMenus", "doc": "&quot;Generates menus.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Step\\GenerateMenus", "fromLink": "PHPoole/Step/GenerateMenus.html", "link": "PHPoole/Step/GenerateMenus.html#method_internalProcess", "name": "PHPoole\\Step\\GenerateMenus::internalProcess", "doc": "&quot;Process implementation.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Step", "fromLink": "PHPoole/Step.html", "link": "PHPoole/Step/GeneratePages.html", "name": "PHPoole\\Step\\GeneratePages", "doc": "&quot;Generates virtual pages.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Step\\GeneratePages", "fromLink": "PHPoole/Step/GeneratePages.html", "link": "PHPoole/Step/GeneratePages.html#method_init", "name": "PHPoole\\Step\\GeneratePages::init", "doc": "&quot;Checks if step can be processed.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Step\\GeneratePages", "fromLink": "PHPoole/Step/GeneratePages.html", "link": "PHPoole/Step/GeneratePages.html#method_internalProcess", "name": "PHPoole\\Step\\GeneratePages::internalProcess", "doc": "&quot;Process implementation.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Step", "fromLink": "PHPoole/Step.html", "link": "PHPoole/Step/LocateContent.html", "name": "PHPoole\\Step\\LocateContent", "doc": "&quot;Locates content.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Step\\LocateContent", "fromLink": "PHPoole/Step/LocateContent.html", "link": "PHPoole/Step/LocateContent.html#method_init", "name": "PHPoole\\Step\\LocateContent::init", "doc": "&quot;Checks if step can be processed.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Step\\LocateContent", "fromLink": "PHPoole/Step/LocateContent.html", "link": "PHPoole/Step/LocateContent.html#method_internalProcess", "name": "PHPoole\\Step\\LocateContent::internalProcess", "doc": "&quot;Process implementation.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Step", "fromLink": "PHPoole/Step.html", "link": "PHPoole/Step/RenderPages.html", "name": "PHPoole\\Step\\RenderPages", "doc": "&quot;Pages rendering:\n1. Iterates Pages collection\n2. Applies Twig templates\n3. Saves rendered files.&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Step\\RenderPages", "fromLink": "PHPoole/Step/RenderPages.html", "link": "PHPoole/Step/RenderPages.html#method_init", "name": "PHPoole\\Step\\RenderPages::init", "doc": "&quot;Checks if step can be processed.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Step\\RenderPages", "fromLink": "PHPoole/Step/RenderPages.html", "link": "PHPoole/Step/RenderPages.html#method_internalProcess", "name": "PHPoole\\Step\\RenderPages::internalProcess", "doc": "&quot;Process implementation.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole\\Step", "fromLink": "PHPoole/Step.html", "link": "PHPoole/Step/StepInterface.html", "name": "PHPoole\\Step\\StepInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Step\\StepInterface", "fromLink": "PHPoole/Step/StepInterface.html", "link": "PHPoole/Step/StepInterface.html#method___construct", "name": "PHPoole\\Step\\StepInterface::__construct", "doc": "&quot;StepInterface constructor.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Step\\StepInterface", "fromLink": "PHPoole/Step/StepInterface.html", "link": "PHPoole/Step/StepInterface.html#method_init", "name": "PHPoole\\Step\\StepInterface::init", "doc": "&quot;Checks if step can be processed.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Step\\StepInterface", "fromLink": "PHPoole/Step/StepInterface.html", "link": "PHPoole/Step/StepInterface.html#method_process", "name": "PHPoole\\Step\\StepInterface::process", "doc": "&quot;Public call to process.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Step\\StepInterface", "fromLink": "PHPoole/Step/StepInterface.html", "link": "PHPoole/Step/StepInterface.html#method_internalProcess", "name": "PHPoole\\Step\\StepInterface::internalProcess", "doc": "&quot;Process implementation.&quot;"},
            
            {"type": "Class", "fromName": "PHPoole", "fromLink": "PHPoole.html", "link": "PHPoole/Util.html", "name": "PHPoole\\Util", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "PHPoole\\Util", "fromLink": "PHPoole/Util.html", "link": "PHPoole/Util.html#method_getFS", "name": "PHPoole\\Util::getFS", "doc": "&quot;Return Symfony\\Component\\Filesystem instance.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Util", "fromLink": "PHPoole/Util.html", "link": "PHPoole/Util.html#method_runGitCommand", "name": "PHPoole\\Util::runGitCommand", "doc": "&quot;Runs a Git command on the repository.&quot;"},
                    {"type": "Method", "fromName": "PHPoole\\Util", "fromLink": "PHPoole/Util.html", "link": "PHPoole/Util.html#method_sortByDate", "name": "PHPoole\\Util::sortByDate", "doc": "&quot;Sort array by &#039;date&#039; item.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


