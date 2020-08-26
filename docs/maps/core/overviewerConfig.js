var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png"
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "tileSize": 384,
        "UPPERRIGHT": 1
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "isOverlay": false,
            "path": "day",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "north_direction": 0,
            "imgextension": "png",
            "showlocationmarker": true,
            "base": "",
            "maxZoom": 10,
            "name": "Daytime Render",
            "world": "Core01",
            "center": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "last_rendertime": 1598421480,
            "poititle": "Markers"
        }
    ],
    "map": {
        "debug": true,
        "cacheTag": "1598421685",
        "controls": {
            "compass": true,
            "mapType": true,
            "coordsBox": true,
            "overlays": true,
            "pan": true,
            "zoom": true,
            "spawn": true
        },
        "north_direction": "lower-left"
    }
};
