var overviewerConfig = {
    "CONST": {
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png"
        },
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "spawn": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "base": "",
            "maxZoom": 10,
            "last_rendertime": 1598990280,
            "path": "day",
            "imgextension": "png",
            "north_direction": 0,
            "name": "Daytime Render",
            "isOverlay": false,
            "showlocationmarker": true,
            "center": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "world": "Core01",
            "minZoom": 0
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "mapType": true,
            "coordsBox": true,
            "overlays": true,
            "compass": true,
            "spawn": true,
            "zoom": true,
            "pan": true
        },
        "cacheTag": "1598990485"
    }
};
