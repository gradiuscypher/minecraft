var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "minZoom": 0,
            "world": "Core01",
            "north_direction": 0,
            "maxZoom": 10,
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "center": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "poititle": "Markers",
            "name": "Daytime Render",
            "zoomLevels": 10,
            "imgextension": "png",
            "path": "day",
            "base": "",
            "last_rendertime": 1597471080,
            "defaultZoom": 1
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "cacheTag": "1597471282",
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "pan": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true,
            "compass": true,
            "zoom": true
        }
    }
};
