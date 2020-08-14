var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png"
        },
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "path": "day",
            "isOverlay": false,
            "north_direction": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "base": "",
            "center": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "last_rendertime": 1597370280,
            "maxZoom": 10,
            "minZoom": 0,
            "zoomLevels": 10,
            "name": "Daytime Render",
            "poititle": "Markers",
            "world": "Core01",
            "defaultZoom": 1
        }
    ],
    "map": {
        "cacheTag": "1597370482",
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "spawn": true,
            "zoom": true,
            "pan": true,
            "coordsBox": true,
            "mapType": true,
            "overlays": true
        },
        "debug": true
    }
};
