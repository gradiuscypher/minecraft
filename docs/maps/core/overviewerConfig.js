var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERLEFT": 0,
        "image": {
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "path": "day",
            "showlocationmarker": true,
            "north_direction": 0,
            "maxZoom": 10,
            "base": "",
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "minZoom": 0,
            "isOverlay": false,
            "zoomLevels": 10,
            "center": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "spawn": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "last_rendertime": 1597586280,
            "world": "Core01",
            "imgextension": "png"
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "controls": {
            "zoom": true,
            "coordsBox": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "pan": true,
            "overlays": true
        },
        "debug": true,
        "cacheTag": "1597586482",
        "north_direction": "lower-left"
    }
};
