var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "name": "Daytime Render",
            "base": "",
            "world": "world",
            "north_direction": 0,
            "imgextension": "png",
            "poititle": "Markers",
            "minZoom": 0,
            "defaultZoom": 1,
            "spawn": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "center": [
                3,
                80,
                12
            ],
            "path": "day",
            "showlocationmarker": true,
            "maxZoom": 8,
            "last_rendertime": 1599292579,
            "zoomLevels": 8
        }
    ],
    "CONST": {
        "tileSize": 384,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "image": {
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png"
        },
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1
    },
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1599292971",
        "controls": {
            "coordsBox": true,
            "pan": true,
            "compass": true,
            "spawn": true,
            "overlays": true,
            "mapType": true,
            "zoom": true
        }
    }
};
