var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png"
        },
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "mapDivId": "mcmap"
    },
    "map": {
        "debug": true,
        "controls": {
            "pan": true,
            "compass": true,
            "spawn": true,
            "coordsBox": true,
            "mapType": true,
            "overlays": true,
            "zoom": true
        },
        "cacheTag": "1597525282",
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "zoomLevels": 10,
            "isOverlay": false,
            "imgextension": "png",
            "path": "day",
            "north_direction": 0,
            "world": "Core01",
            "base": "",
            "center": [
                80,
                96,
                192
            ],
            "spawn": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "defaultZoom": 1,
            "name": "Daytime Render",
            "last_rendertime": 1597525080,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "maxZoom": 10,
            "showlocationmarker": true
        }
    ],
    "worlds": [
        "Core01"
    ]
};
