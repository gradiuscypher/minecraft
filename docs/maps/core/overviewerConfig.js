var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "pan": true,
            "zoom": true,
            "overlays": true,
            "coordsBox": true,
            "mapType": true,
            "spawn": true
        },
        "debug": true,
        "cacheTag": "1596747682"
    },
    "tilesets": [
        {
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "name": "Daytime Render",
            "showlocationmarker": true,
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
            "imgextension": "png",
            "zoomLevels": 10,
            "maxZoom": 10,
            "defaultZoom": 1,
            "isOverlay": false,
            "path": "day",
            "world": "Core01",
            "last_rendertime": 1596747480
        }
    ],
    "CONST": {
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "tileSize": 384,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2
    }
};
