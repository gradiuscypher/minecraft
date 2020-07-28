var overviewerConfig = {
    "map": {
        "debug": true,
        "cacheTag": "1595916262",
        "controls": {
            "compass": true,
            "zoom": true,
            "coordsBox": true,
            "mapType": true,
            "spawn": true,
            "overlays": true,
            "pan": true
        },
        "north_direction": "lower-left"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "imgextension": "png",
            "defaultZoom": 1,
            "north_direction": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "path": "day",
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "poititle": "Markers",
            "world": "Core01",
            "base": "",
            "last_rendertime": 1595915880,
            "zoomLevels": 10,
            "center": [
                80,
                96,
                192
            ],
            "maxZoom": 10,
            "minZoom": 0,
            "name": "Daytime Render"
        }
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "image": {
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1
    }
};
